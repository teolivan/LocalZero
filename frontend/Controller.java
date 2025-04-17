package frontend;
// denna classen är en controller klass. Kan funka som en mediator -- vi uppfyller då Mediator design pattern.
// singleton design pattern ? kolla upp. Iom bara en controller.

import java.util.HashMap;
import java.util.List;
import java.util.Objects;

public class Controller{
    HashMap<String, Integer> users;

    public Controller(){
        users = new List<User>();
    }

    String String post(String id) {
        String response = "";
        if(id.isEmpty()){
            System.out.println("id is empty");
            response = "empty ID";
        } else {

            if(users.containsKey(id)){
                System.out.println("User successfully found");

                 // lägg till logik hur man får tag på usern här;

                String response = user.post();
                if(Objects.equals(response, "success")) {
                    System.out.println("Successfull post");
                } else if (Objects.equals(response, "error")) {
                    System.out.println("Failed");
                }
                response = "success";
            } else {
                System.out.println("User not found");
                response = "user not found";
            }
            }
            return response;
        }


    public void login() {
    }

    public void logout() {
    }

    public void comment() {
    }

    public void createChat() {
    }
}