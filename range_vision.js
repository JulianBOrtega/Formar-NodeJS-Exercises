function getDigitSum(digits)
{
    return digits.reduce((result, currentValue) => result + currentValue, 0);
}

function range_vision(input)
{
    const array = Array.from(String(input), Number);

    if(!array.includes(1)) return false;

    let lowestValue;
    array.forEach((range, index) =>
    {
        const leftSum = getDigitSum(array.slice(range > index ? 0 : index - range, index));
        const rightSum = getDigitSum(array.slice(index + 1, index + range + 1));
        const total = leftSum + rightSum;

        if(lowestValue == undefined || total <= lowestValue.value)
        {
            if(lowestValue && lowestValue.value == total && lowestValue.digit == 1) return;
            lowestValue = {value: total, digit: range };
        }
    });
    
    return lowestValue.digit == 1 ? true : false;
}

console.log(range_vision(34315));