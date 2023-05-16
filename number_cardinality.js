function number_cardinality(int)
{
    const lastDigit = int % 10;

    switch(true)
    {
        case lastDigit === 0:
            return 'zero';
        case lastDigit === 5:
            return 'five';
        case int % 2 === 0:
            return 'even';
        case int % 2 !== 0:
            return 'odd';
        default:
            return 'Caso desconocido (?' 
    }       
}

console.log(number_cardinality(103));