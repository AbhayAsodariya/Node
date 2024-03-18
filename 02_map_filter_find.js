const arr = ["c", "c++"]

for (let el in arr) {
    console.log(el);

    console.log(arr[el]);
}

arr.forEach((val, index) => {
    console.log(val);
    console.log(index);
})

const lengthofarray = arr.map((e) => e.length)
console.log(lengthofarray);

let result = arr.find(el => el === "c")
console.log(result);
result = arr.filter(el => el!== "c")
console.log(result);
