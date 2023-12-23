import java.util.Scanner;

public class HMInterface {
    private static Service service;
    public static void start(){
        Scanner scanner=new Scanner(System.in);
        School school=HMInterface.createSchool();
        System.out.println("WELCOME TO "+school.getName()+"in "+school.getAddress());
        String action;
        Grade grade=new Grade();
        do {
            System.out.println("Could you let me know which service you're interested in ?");
            action=scanner.next();

            switch (action) {
                case "addStudent" :
                    System.out.println("give the grade you wanna to add the student to:");
                    int value= Integer.parseInt(grade.getValue());
                    HMInterface.addStudent(value);
                    break;
                case "addTeacher" :
                    HMInterface.addTeacher();
                    break;

                case "ptint all students":
                    HMInterface.displayStudentsInSchool();
                    break;

            }

        }while (!action.equals("exit"));


    }
    private static School createSchool(){
        Scanner scanner=new Scanner(System.in);
        School school=new School();
        System.out.print("Enter the name of the school: ");
        school.setName(scanner.next());

        System.out.print("Enter the location of the school: ");
        school.setAddress(scanner.nextLine());

        System.out.print("Enter the phone number of the school: ");
        school.setPhoneNumber(scanner.nextInt());

        HMInterface.service=new Service(school);
        return school;

    }
    private static void addStudent(int value){
        Scanner scanner=new Scanner(System.in);
        Student student = new Student();
        HMInterface.setDataUser(student);
        HMInterface.service.addStudentToGrade(student,value);

    }
    private static void displayStudentsInSchool() {
        System.out.println("Students in all Grades ");
        for (Student student : HMInterface.service.getMySchool().getStudents()) {
            System.out.println("- " + student.getName());
        }
    }
    private static void addTeacher(){
        Scanner scanner=new Scanner(System.in);
        Teacher teacher = new Teacher();
        HMInterface.setDataUser(teacher);
        HMInterface.service.addTeacher(teacher);

    }
    private static void setDataUser(User u){
        Scanner scanner=new Scanner(System.in);
        System.out.println("Plz enter the name");
        u.setName(scanner.next());
        System.out.println("Please enter the email");
        u.setEmail(scanner.next());
        System.out.println("Please enter the password");
        u.setPassword(scanner.next());
        if (u instanceof Teacher) {
            System.out.println("Please enter the subject");
            ((Teacher)u).setPassword(scanner.next());
        } else if (u instanceof Student) {
            System.out.println("Please enter the phone number");
            ((Student)u).setParentContact(scanner.next());

        }
    }
    private static void findStudentByName(){
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter the name of the student please!");
        String name=scanner.next();
        Student student=HMInterface.service.searchStudentByName(name);
        if (student == null){
            System.out.println("Not Found!");
        }else {
            HMInterface.service.displayStudentInfo(student);
        }
    }
    private static void findTeacherByName(){
        Scanner scanner=new Scanner(System.in);
        System.out.println("Enter the name of the teacher please!");
        String name=scanner.next();
        Teacher teacher=HMInterface.service.searchTeacherByName(name);
        if (teacher == null){
            System.out.println("Not Found!");
        }else {
            HMInterface.service.displayTeacherInfo(teacher);
        }
    }
    private static void removeUser(User user){
        if (user instanceof Student){
            HMInterface.service.removeStudent((Student) user);
        }else if (user instanceof Teacher){
            HMInterface.service.removeTeacher((Teacher) user);
        }
    }
}
