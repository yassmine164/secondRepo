import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Map;

public class School{
    String name;
    String address;
    int phoneNumber;
    ArrayList<Student> students;
    ArrayList<Teacher> teachers;
    ArrayList<Grade>grades;
    ArrayList<Subject>subjects;
    public School(String name,String address,int phoneNumber){
        this.address=address;
        this.name=name;
        this.phoneNumber=phoneNumber;
        this.initObj();
    }
    public School(){}
    public void initObj(){
        this.students=new ArrayList<Student>();
        this.teachers=new ArrayList<Teacher>();
        this.grades=new ArrayList<Grade>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public ArrayList<Student> getStudents() {
        return students;
    }

    public ArrayList<Teacher> getTeachers() {
        return teachers;
    }

    public ArrayList<Grade> getGrades() {
        return grades;
    }

    public ArrayList<Subject> getSubjects() { return subjects; }

}
