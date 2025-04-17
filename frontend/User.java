package frontend;

import java.util.ArrayList;
import java.util.List;

public class User {
    private String id;
    private String password;
    private List<User> friendList;
    Controller controller;

    public User(String id, String password, Controller controller) {
        this.id = id;
        this.password = password;
        friendList = new ArrayList<User>();
        this.controller = controller;
    }

    public void login() {
        //should be checked if user exists in db and if credentials match
        System.out.println("logging in");
        controller.login();
    }

    public void logout() {
        System.out.println("logging out");
        controller.logout();
    }

    public String post() {
        System.out.println("post");
        controller.post(this.id);
        return null;
    }

    public void comment() {
        System.out.println("comment");
        controller.comment();
    }

    public void addFriend(User user) {
        friendList.add(user);
    }

    public void removeFriend(User user) {
        if(friendList.contains(user)) {
            friendList.remove(user);
        } else {
            System.out.println("friend not found");
        }
    }

    public void createChat() {
        System.out.println("creating chat");
        controller.createChat();
    }

    public void updatePost() {
        System.out.println("updating post");
        controller.updatePost();
    }


}