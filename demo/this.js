// If you do just 'this' it will refer to the window, however, 
// if you use a method on the object e.g. me.talk() this will return 'I am Sina' 

// 'this' is dynamic, changes depending on the usecase, it's value changes depending on the left side
// e.g. me.talk() look at the left side 

function talk() {
    return `I am ${this.name}`
}
 
const me = {
    name: 'Sina',
    talk
}

// Perhaps I'm pulling this from an api, I can't have the talk function inside,
// you can bind the talk function e.g. talk.bind(api) which returns a function 

// Store talk.bind(api) in a variable e.g const metalk = talk.bind(api);
// metalk() returns "I am JC"

const api = {
  name: 'JC'
}

console.log('api object', api)

const meTalk = talk.bind(api)

console.log('const meTalk = talk.bind(api):', meTalk())

const you = {
    name: 'Josh',
    talk
}