package com.example.LocalZero.frontend;

import java.util.List;

public class User {
    private String id;
    private String password;
    private List<User> friendList;

    public void login() {
        //should be checked if user exists in db and if credentials match
        System.out.println("logging in");
    }

    public void logout() {
        System.out.println("logging out");
    }
}