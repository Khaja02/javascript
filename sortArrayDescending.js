function sortArrayDescending(array) {
    return array.sort((a, b) => b - a);
}

while (true){
    const inputString = prompt("Enter the list of numbers separated by commas:");
const inputArray = inputString.split(',');

let isAllIntegers = true;

for (let i = 0; i < inputArray.length; i++) {
    if (isNaN(inputArray[i].trim())) {
        isAllIntegers = false;
        break;
    }
}
if (isAllIntegers){
    const intArray = inputArray.map(element => parseInt(element.trim(), 10));
    const sortedArray = sortArrayDescending(intArray);
    console.log("Sorted array in descending order:", sortedArray);
    break
}else{
    console.log("Input contains non-integer values.");
}
}

    

