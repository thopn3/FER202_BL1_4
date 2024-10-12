// Ky thuat phan ra mang hoac doi tuong
const printInfo = ({id, name}) => {
    console.log(`Id: ${id}, Name: ${name}`);
}

const student = {id: 1, name: "Hoang Binh", age: 20, score: 10};
printInfo(student);