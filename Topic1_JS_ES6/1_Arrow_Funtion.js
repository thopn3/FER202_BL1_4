// Hàm mũi tên có 2 tham số và không có gía trị trả về
let total = (number1, number2) => {
    console.log("Total number1 and number2 = " + (number1 + number2));
}

// Hàm mũi tên có 1 tham số và có giá trị trả về
let sumNumber = numbers => {
    let sum = 0;
    for (let element of numbers) {
        sum += element;
    }
    return sum;
}

// Hàm mũi tên có 2 tham số, trả về 1 giá trị (không sử dụng từ khóa return)
let total1 = (number1, number2) => number1 + number2;

// Hàm mũi tên bên trong 1 object literal (Đối tượng ẩn danh)
let objLiteral = {
    name: "David",
    age: 90,
    info: function(){
        console.log(`Name is: ${this.name}, Age: ${this.age}`)
    }
};

// Lời gọi hàm
total(10, 20);
let arrNumbers = [5, 10 ,15];
console.log(`Total number = ${sumNumber(arrNumbers)}`);
console.log(`Total 1 = ${total1(1,2)}`);

objLiteral.info();

