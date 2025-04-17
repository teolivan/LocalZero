public class Post {
    private String text;
    private User sender;
    private List<User> receivers; // <-- ska det vara en eller flera man ska kunna skriva till? eventuellt ha en grupp med flera
    private int chatID;
    private String location;
}