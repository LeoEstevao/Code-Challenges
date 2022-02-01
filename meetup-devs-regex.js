// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organizing for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
    const findEuOrJsRgx = /(javascript|europe)/gi;

    const jsEuDevs = list.filter (dev => {
        return (dev.language.match(findEuOrJsRgx) && dev.continent.match(findEuOrJsRgx))
    })

    // console.log(jsEuDevs)
    return jsEuDevs.length;
}



var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

var list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

var list3 = []

console.log(countDevelopers(list1));
console.log(countDevelopers(list2));
console.log(countDevelopers(list3));