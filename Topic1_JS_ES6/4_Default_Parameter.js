const getName = (fName="Nam", lName = "Pham Tien") => {
    console.log(`Fullname: ${fName} ${lName}`);
}

// Goi ham
getName();
getName("Duc");
getName("Thao", "Tran Thanh");

// Tham so mac dinh duoc chi dinh la mang
let sumNumber = (numbers=[]) => {
    let sum = 0;
    numbers.map(e => sum+=e);
    return sum;
}

console.log(sumNumber([3, 2, 4]));
