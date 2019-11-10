// let name = "Mubush";
// let lastname = "Memmedzade";
// let age = 19;



// console.log(stu2.fullname())
// let stu1 = {
//     id: 1,
//     name: "Mubush",
//     lastname: "Memmedzade",
//     age: 19,
//     "group name": "P507"
// }

// let stu2 = {
//     id: 2,
//     name: "Nigar",
//     lastname: "Mirzeyeva",
//     age: 25,
//     "group name": "P507"
// }

// let stu3 = {
//     id: 2,
//     name: "Sadiq",
//     lastname: "Eliyev",
//     age: 20,
//     "group name": "P507"
// }

// let p507 = {
//     name: "P507",
//     students: [],
//     addStu: function(student) {
//         if (this.students.find(obj => obj.id == student.id) === undefined) {
//             this.students.push(student);
//         } else {
//             alert(student.id + "id-li telebe artiq movcuddur")
//         }

//     }
// }

// p507.addStu(stu1);
// p507.addStu(stu2);
// p507.addStu(stu3);

//Class

// class Student {
//     constructor(id, name, lastname, age) {
//         this.id = id;
//         this.name = name;
//         this.lastname = lastname;
//         this.age = age;
//     }
//     fullname() {
//         return this.name + " " + this.lastname;
//     }
// }
// let stu1 = new Student(1, "Mubush", "Memmedzade", 19);
// let stu2 = new Student(2, "Nigar", "Mirzeyeva", 25);
// let stu3 = new Student(3, "Sadiq", "Eliyev", 20);


// class Group {
//     constructor(name, max) {
//         this.name = name;
//         this.max = max;
//     }
//     students = [];
//     addStu(student) {
//         if (this.students.find(obj => obj.id == student.id) === undefined) {
//             this.students.push(student);
//         } else {
//             alert(student.id + "id-li telebe artiq movcuddur")
//         }
//     }
// }

// let p507 = new Group("p507", 18);
// let p508 = new Group("p508", 16);

// p507.addStu(stu1);
// p507.addStu(stu2);
// p508.addStu(stu3);

// let arr = new Array(15, 25, 35);


class CustomArray {
    constructor() {
        this.x = arguments;
        this.Length = 0;
        for (let i = 0; i < Infinity; i++) {
            if (arguments[i] !== undefined) {
                this.Length++;
            } else {
                break;
            }

        }
    }

    customSlice(start = 0, end = this.Length) {
        let result = [];
        if (start < 0) {
            start = this.Length + start;
        }
        if (end < 0) {
            end = this.Length + end;
        }
        let j = 0
        for (let i = start; i < end; i++) {
            result[j] = this.x[i];
            j++;
        }
        return result;
    }
}

let arr = new CustomArray(15, 25, 35, "Mubush");
console.log(arr.customSlice(1, 4))