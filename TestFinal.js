class University{
    name ="";
    location = "";
    department =[];
    student =[];
    professor = [];
    constructor(name,location,department,student,professor){
        this.name = name;
        this.location = location;
        this.department = department;
        this.student = student;
        this.professor = professor;
    }
    addDepartment(name){
        console.log(`Department ${name}`);
        const department = new Department(name);
        this.department.push(department);
    }
    addStudent(student){
        this.student.push(student);
    }
    addProfessor(professor){
        this.professor.push(professor);
    
    }
    removeDepartment(){
       

    }
    removeStudent(){
       

    }
    removeProfessor(){
     
    }
    getDepartment(){
      return this.department;

    }
    getStudent(){
        return this.student;

    }
    getProfessor(){
        return this.professor;
    }

    toString(){
        return `University : ${this.name}
        location : ${this.location}
        department : ${this.department}
        students : ${this.student}
        Profressor :${this.professor}
        `;
    }
}
class Department{
    course = [];
    student = [];
    professor =[];
    constructor(name,course,student,){
        this.name = name;
        this.course = course;
        this.student = student;
    }
    addCourse(course){
        this.course.push(course);

    }
    removeCourse(){

    }
    addStudent(student){
        this.student.push(student);

    }
    removeStudent(){

    }
    addProfessor(){
        this.professor.push(this.professor);

    }
    removeProfessor(){

    }
    getCourse(){
        return this.course;

    }
    getStudent(){
        return this.student

    }
    toString(){
        return `Department: ${this.name}
        Course: ${this.course}
        Students : ${this.student}
        Professor : ${this.professor}`;
    }
    
}
class course{
    professor = [];
    student = [];
    constructor(code,title,student,professor){
        this.code = code;
        this.title = title;
        this.student = student;
        this.professor = professor;
    }
    addStudent(student){
        this.student.push(student);
       
    }
    removeStudent(){

    }
    setProfessor(professor){
        this.professor = professor;

    }
    getProfessor(){
        return this.professor;

    }
    getStudent(){
        return this.student;

    }
    toString(){
        return `Couse: ${this.code} ${this.title}
        Professor : ${this.professor}
        students : ${this.student}
        `;

    }
}
class Professor{
    course = [];
    
    constructor(staffId,course,){
        this.staffld = staffId;
        this.course = course;
    }
    teachCourse(){
        this.course.push(course);

    }
    stopTeacchingCousrse(){

    }
    getCourse(){
        return this.course;


    }
    toString(){
        return `Professor: ${this.staffld} 
        coruse : ${this.course}
        `;
    }

}
class Person{
    constructor(name,address,email){
        this.name = name;
        this.address = address;
        this.email = email;
    }
    toString(){
        return   `Name: ${this.name} \n Address: ${this.address} \n Email: ${this.email}`;

    }
}
class Student{
    person = [];
    course = [];
    constructor(studentId,year,person,course){
        this.studentId =studentId;
        this.year = year;
        this.person = person;
        this.course = course;
    }
    registerCourse(course){
        this.course.push(course);
    }
    dropCourse(){

    }
    getCourse(){
        return this.course;

    }
    toString(){
        return   `Student : ${this.person} 
        Student ID: ${this.studentId} 
        Year: ${this.year}
        Course: ${this.course}`;
    }

}
const main = () =>{
    const University1 = new University("NaKhon Pathom Rajabhat University","85 Malaiman Road,NaKhon Pathom,Thailand","Computer Science,Software Engineering","Alice,Bob,","Dr. Worachet Uttha,Dr Udsanee Pakdeetrakulwong");
    const Department1 = new Department("Computer Science","1","Alice","Dr. Worachet Uttha");
    const Department2 = new Department("Software Engineering","2","Bob","Dr. Udsanee Pakdeetrakulwong");
    const Course1 = new course ("CS101 - ","Introduction to Programming","Alice","Dr. Worachet Uttha");
    const Student1 = new Student("S001","1","Alice","Introduction to Programming")
    const Student2 = new Student("S001","2","Bob","Introduction of Database Design")
    const Course2 = new course ("SE101 - ","Introduction of Database Design ","Bob","Dr. Udsanee Pakdeetrakulwong")
    const Professor1 = new Professor("Dr. Worachet Uttha,Staff ID: P001","Introduction to Programming")
    const Professor2 = new Professor("Dr Udsanee Pakdeetrakulwong,Staff ID: P002","Introduction to Database Design") 
    console.log(University1.toString());
    console.log(Department1.toString());
    console.log(Department2.toString());
    console.log(Course1.toString());
    console.log(Course2.toString());                      
    console.log(Professor1.toString());
    console.log(Professor2.toString());
    console.log(Student1.toString());                                                                       
    console.log(Student2.toString());


}
main(); 