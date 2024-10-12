// Dinh nghia 1 ham su dung tham so kieu: Rest
const sumNumbers = (...numbers) => {
    let result = 0;
    for (const e of numbers) {
        result += e;
    }
    return result;
}

// Goi ham thuc thi
console.log(`Sum = ${sumNumbers(1, 2, 3)}`);
console.log(`Sum = ${sumNumbers(1, 2, 3, 4, 5)}`);
console.log(`Sum = ${sumNumbers(1, 2)}`);

// Truyen 1 mang so vao ham co tham so rest
const arrayNumber = [2, 2, 20];
// Su dung toan tu spread de rai tung phan tu vao lam doi so cho ham
console.log(`Sum = ${sumNumbers(...arrayNumber)}`);

// Du dung toan tu Spread de tron cac mang voi nhau
const db = [
    {id: 1, name: "David", age: 20},
    {id: 2, name: "Marry", age: 19},
    {id: 3, name: "Noa", age: 21}
];

const newObj = {id: 4, name: "Tom", age: 19};
const newArrObj = [
    {id: 5, name: "Hary", age: 20},
    {id: 6, name: "Kane", age: 23}
];

// Bo sung newObject vao db bang su dung ham trong JS
//db.push(newObj);

// Rai newObject vao db
const newDb = [newObj, ...db, ...newArrObj];

console.log(newDb);
