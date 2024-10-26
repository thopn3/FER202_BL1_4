// // Dinh nghia 1 doi tuong Promise de kiem soat hanh vi kiem tra gia tri cua 1 so ngau nhien duoc sinh ra
const myPromise1 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if(randomNumber > 0.5)
        resolve(randomNumber);
    else
        reject(`Number ${randomNumber} is not greater than or equal to 0.5`);
});

const myPromise2 = new Promise((resolve, reject) => {
    resolve("Promise 1 execution");
});

// Thuc thi mot single Promise
// myPromise1
//     .then(result => console.log(`Result: ${result}`))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Finished"));

// Thuc thi dong thoi (tai mot thoi diem) ca 2 promies
// Promise.all([myPromise1, myPromise2])
//     .then(result => console.log(result));

// Su dung 2 tu khoa: async, await de tao va thuc thi doi tuong Promise

async function callPromise(){
    const result = await myPromise1;
    console.log(result);
}
callPromise();


