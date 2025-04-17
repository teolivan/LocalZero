package frontend;

public class Comment implements PostInterface {
    User commenter;
    Post post;
    String comment;

    public Comment(User user, Post post, String comment) {
        this.commenter = user;
        this.post = post;
        this.comment = comment;
    }

}