package com.example.mobileworld.repository;

import com.example.mobileworld.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    User findUserByEmail(String email);
    Optional<User> findByUserName(String username);
}