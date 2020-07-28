// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: "Ryan",
    age: 30,
    hobbies: ['Sports','Cooking']
};

let favoriteactivities: string[];
favoriteactivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.name)