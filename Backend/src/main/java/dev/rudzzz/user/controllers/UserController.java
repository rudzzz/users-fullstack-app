package dev.rudzzz.user.controllers;

import dev.rudzzz.user.entities.User;
import dev.rudzzz.user.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
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
}
