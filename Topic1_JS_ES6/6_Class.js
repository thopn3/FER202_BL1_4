// Dinh nghia 1 class
class Person{
    constructor(id, name, age){
        this.id = id,
        this.name = name,
        this.age = age;
    }

    outputPerson(){
        return `${this.id}\t${this.name}\t${this.age}`;
    }
}

// Khai bao 1 mang chua cac doi tuong
const listPerson = [];
listPerson.push(new Person(1, "Tom", 20));
listPerson.push(new Person(2, "Marry", 21));
listPerson.push(new Person(3, "Tom", 19));
const p = new Person(4, "HoangNN", 18);

console.log("ID\tName\tAge");
listPerson?.forEach(p => console.log(p.outputPerson()));