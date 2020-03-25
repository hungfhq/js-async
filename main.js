// async function myAwesomeFunction() {
//   setTimeout(() => {}, 100, "foo");
// }

// const result = myAwesomeFunction();
// console.log(result);

async function mySecondFunction(x) {
    setTimeout(() => {}, 400);
    console.log("mySecondFunction", x);
    return 2 + x;
}

async function myThirdNestedFunction(x) {
    setTimeout(() => {}, 0);
    console.log("myThirdNestedFunction", x);
    return 3 + x;
}

async function myAwesomeFunction() {
    let startingValue = 1;
    let firstResult = await mySecondFunction(startingValue);
    let finalResult = await myThirdNestedFunction(firstResult);
    // const result = Promise.all([mySecondFunction(startingValue), myThirdNestedFunction(mySecondFunction(startingValue))]);
    // return result;

}

let promise = myAwesomeFunction();
promise.then(result => console.log(result));
