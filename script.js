console.log('person 1 :show ticket');
console.log('person 2 :show ticket');

const promiseWifeBringingTIcks = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('ticket');
    },3000)
});
const getPopcorn =promiseWifeBringingTIcks.then((t) => {
    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject) =>
    resolve(`${t} popcorn`));
    });
const getButter = getPopcorn.then((t)=>  {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    return new Promise((resolve,reject) =>
        resolve(`${t} butter`));
    
    });
    const getColdDrinks = getButter.then((t) => {
        console.log(`husband: i got some butter on popcorn`);
            console.log('husband: we should go in');
            console.log('wife: no i need some cold drinks');

            return new Promise((resolve,reject) =>
        resolve(`${t} coldDrinks`));

    });
    const finished = getButter.then((t) => {
        console.log(`husband : here i got some coldDrinks`)
            console.log(`husband: anything else darling?`);
            console.log(`wife: lets go we are getting late`);
            console.log(`husband : thank you for the remainder *grins*`);
            console.log(`person 3 :shows ticket`)
        return 'ticket';
    })


console.log('person 4 :show ticket');
console.log('person 5 :show ticket');   