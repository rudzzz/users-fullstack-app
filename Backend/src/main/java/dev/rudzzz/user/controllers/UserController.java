package dev.rudzzz.user.controllers;

import dev.rudzzz.user.entities.User;
import dev.rudzzz.user.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:5173/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @PostMapping
    public User save(@RequestBody User user){
        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Long id){
        Optional<User> user = userRepository.findById(id);

        if(user.isPresent()){
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody User user, @PathVariable Long id) {
        Optional<User> optionalExistingUser = userRepository.findById(id);

        if (optionalExistingUser.isPresent()) {
            User existingUser = optionalExistingUser.get();
            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            userRepository.save(existingUser);
            return ResponseEntity.ok(existingUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            return ResponseEntity.notFound().build();
        } else {
            userRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
    }

}
