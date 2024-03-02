// const tinderUser = new Object() // {} Singleton Object

const tinderUser = {}  //{} non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            firstName: "Akshay",
            lastName: "S"
        }
    }
}

// console.log(regularUser.fullname)//{ userfullname: { firstName: 'Akshay', lastName: 'S' } }
// console.log(regularUser.fullname.userfullname)  //{ firstName: 'Akshay', lastName: 'S' }
// console.log(regularUser.fullname.userfullname.firstName);  //Akshay


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



// console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  // [ '123abc', 'Sam', false ]
//Imp
//The above values will be displayed in array format so looping over is easy..

// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
//entries will have the first value as key and the second value will be values


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //true




//Object Destructure
const course = {
    courseName: "Javascript",
    coursePrice: "999",
    courseInstructor: "Akshay"
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);  //Akshay
//Instead of giving course.courseInstructor we can just give as courseInstructor


const {courseInstructor: instructor} = course
console.log(instructor);  //Akshay











