function fizz_buzz(N)
{
    const array = [];

    for(let i=1; i<=N; i++)
    {
        let fizzbuzz = '';

        if(i % 3 === 0) fizzbuzz += 'Fizz';
        if(i % 5 === 0) fizzbuzz += 'Buzz';

        array.push(fizzbuzz || i);
    }

    return array;
}

module.exports = fizz_buzz;