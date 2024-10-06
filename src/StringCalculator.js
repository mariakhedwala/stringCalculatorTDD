export const add = (numbers) => {
    //trim input
    if (numbers.trim() === "") return 0;

    // Check for custom delimiter
    let delimiter = ',';
    let equation = '';

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("n");
        delimiter = numbers.substring(2, delimiterEndIndex - 1);
        equation = numbers.substring(delimiterEndIndex + 1);
    } else {
        equation = numbers;
    }

    const listOfNumbers = equation
        .replace("\\n", delimiter)
        .split(delimiter)// Split by custom delimiter, comma, or newline
        .map(num => Number(num))

    const listOfNegativeNum = listOfNumbers.filter(num => num < 0);
    if (listOfNegativeNum.length > 0) {
        throw new Error(`Negative numbers not allowed: ${listOfNegativeNum.join(',')}`);
    }

    return listOfNumbers.reduce((sum, num) => sum + num, 0);
}