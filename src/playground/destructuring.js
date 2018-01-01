// const person = {
//     name: 'Peter',
//     age: 28,
//     location: {
//         city: 'Lagos',
//         temp: 75
//     }
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

const address = ['No 21 Alagba', 'Orile', 'Lagos', '23101'];

 const [street, city, state, zip] = address;
 console.log(`You are in ${city} ${state}.`);