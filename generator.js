let starter = ['Studies say','Why is', 'Donald Trump says','38 House Republicans say',];
let subject = ['swans', 'liberal lefties', 'Matt Damon'];
let ending = ['are eating our babies','causes cancer','is corrupting our youth'];

const generateStatement = () => {
    random1 = starter[Math.floor(Math.random() * starter.length) -1]
    random2 = subject[Math.floor(Math.random() * subject.length) -1]
    random3 = ending[Math.floor(Math.random() * ending.length) -1]
    return random1 + ' ' + random2 + ' ' + random3;
}

console.log(generateStatement());