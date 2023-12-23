import java.util.ArrayList;
import java.util.List;

public class Grade {
    private String  Value;
    Teacher teacher;
     ArrayList<Student> students;

    public Grade(String Value) {
        this.Value = Value;
    }
    public Grade(){}


    public void addStudent(Student student){
        students.add(student);
    }
    public List<Student> getStudent() {
        return students;
    }

    public String  getValue() {
        return Value;
    }

    public void setValue(String  Value) {
        this.Value = Value;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Teacher getTeacher() {
        return teacher;
    }
}
