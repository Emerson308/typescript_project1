

let array : (number|string)[] = [0 , "1", 1,2,2,2];
let arrayString: string[] = [];
let arrayNumber: number[] = [];

array.forEach((item: number|string) => {
    if(typeof(item) === 'number'){
        arrayNumber.push(item)
    } else if (typeof(item) === 'string'){
        arrayString.push(item)
    }
})

console.log(arrayNumber);
console.log(arrayString);