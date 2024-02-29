const marvel_heros = ["IronMan", "SpiderMan", "Thor"]
const dc_heros = ["SuperMan", "Batman", "Flash"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //['IronMan', 'SpiderMan', 'Thor', [ 'SuperMan', 'Batman', 'Flash' ]]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  //[ 'IronMan', 'SpiderMan', 'Thor', 'SuperMan', 'Batman', 'Flash' ]



//spread out values
//using spread is better as we can include as many values as we want
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);  //[ 'IronMan', 'SpiderMan', 'Thor', 'SuperMan', 'Batman', 'Flash' ]


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_array = anotherArray.flat(Infinity)
console.log(real_array);  //1, 2, 3, 4, 5, 
                          //6, 7, 6, 7, 4,
                          //5


console.log(Array.isArray("Akshay")); //false
console.log(Array.from("Akshay"));  //[ 'A', 'k', 's', 'h', 'a', 'y' ]

console.log(Array.from({name: "Akshay"})); //[]  Interesting 
//cause we have not provided keys or values


let score1 = 100
let score2 = 200
let score3 = 300

//Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]

