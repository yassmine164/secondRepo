import java.util.ArrayList;
import java.util.List;

public class Teacher extends User {
    Subject subject;

    public Teacher(String email, String password, String name,Subject subject) {
        super(email, password, name);
        this.subject=subject;
    }
    public Teacher(){}

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
}

