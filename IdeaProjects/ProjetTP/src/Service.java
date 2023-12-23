import com.sun.source.tree.Scope;

import java.util.ArrayList;

public class Service {
    School mySchool;
    public Service(School MYschool){
        this.mySchool=mySchool;
    }

    public School getMySchool() {
        return mySchool;
    }

    public void setMySchool(School mySchool) {
        this.mySchool = mySchool;
    }

    public void addStudentToGrade(Student student ,int gradeValue){
        Grade grade=searchGradeByValue(gradeValue);
        if (grade != null){
            grade.addStudent(student);
            System.out.println("Student " + student.getName() + " added to Grade " + grade.getValue());
        } else {
            System.out.println("Grade " + gradeValue + " not found in the school.");
        }

    }
    public void addTeacher(Teacher teacher){
        this.mySchool.getTeachers().add(teacher);
    }
    public void addGrade(Grade grade){
        this.mySchool.getGrades().add(grade);
    }
    public void addSubject(Subject subject){
        this.mySchool.getSubjects().add(subject);
    }
    public void removeStudent(Student student){
        this.mySchool.getStudents().remove(student);
    }
    public void removeTeacher(Teacher teacher){
        this.mySchool.getTeachers().remove(teacher);
    }
    public void removeGrade(Grade grade){
        this.mySchool.getGrades().remove(grade);
    }
    public void removeSubject(Subject subject){
        this.mySchool.getSubjects().remove(subject);
    }
    public Student searchStudentByName(String name){
        Student a=null;
        for (Student student : this.mySchool.getStudents()) {
            if (student.getName().toUpperCase().equals(name.toUpperCase())) {
                a= student;
            }

        }
        return a;
    }
    public Teacher searchTeacherByName(String  name){
        Teacher a=null;
        for (Teacher teacher : this.mySchool.getTeachers()) {
            if (teacher.getName().toUpperCase().equals(name.toUpperCase())) {
                a= teacher;
            }
        }
        return a;
    }
    public Teacher searchTeacherBySubject(Teacher subject) {

        for (Teacher teacher : this.mySchool.getTeachers()) {
            if (teacher.getSubject().equals(subject)) {
                return teacher;
            }

        }
        return null;
    }
    public Grade searchGradeByValue(int value){
        for (Grade grade: this.mySchool.getGrades()) {
            if (grade.getValue().equals(value)) {
                return grade;
            }

        }
        return null;
    }
    public static void displayStudentInfo(Student student){
        System.out.println(student.getName()+" "+student.getEmail()+" "+student.getParentContact());
    }
    public static void displayTeacherInfo(Teacher teacher){
        System.out.println(teacher.getName()+" "+teacher.getEmail()+" "+teacher.getSubject());
    }
    public void displayGradesAndStudents() {
        System.out.println("Grades and Students:");
        for (Grade grade : mySchool.getGrades()) {
            System.out.println("Grade " + grade.getValue() + ":");
            for (Student student : grade.getStudent()) {
                System.out.println("- " + student.getName());
            }
        }
    }



}
