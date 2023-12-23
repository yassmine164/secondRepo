import java.util.ArrayList;
import java.util.List;

public class Student extends User {
    String parentContact;
    Grade grade;
    public Student(String email, String password, String name, String parentContact) {
        super(email, password, name);
        this.parentContact=parentContact;
    }
    public Student(){
    }


    public String getParentContact() {
        return parentContact;
    }

    public static void setParentContact(String parentContact) {
        parentContact = parentContact;
    }

    public Grade getGrade() {
        return grade;
    }
}
