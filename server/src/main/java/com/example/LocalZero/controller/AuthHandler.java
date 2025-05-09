package com.example.LocalZero.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthHandler {

// Add your authentication methods here
    // For example, login, register, etc.

    // Example method
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        // Implement your login logic here
        return ResponseEntity.ok("Login successful for user: " + username);
    }

}
