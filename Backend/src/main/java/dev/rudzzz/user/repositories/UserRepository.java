package dev.rudzzz.user.repositories;

import dev.rudzzz.user.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
