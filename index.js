class Cat {
    constructor(food, yarnBalls, kitten) {
        this.food = food;
        this.yarnBalls = yarnBalls;
        this.kitten = kitten;
    }
    sleepsAllDay() {
        console.log('Sleeps all day');
    };
    scratches() {
        console.log('Scratches all the time');
    };
    sitsAtWindow() {
        console.log('Sits at the window when not sleeping');
    };

}
const cat1 = new Cat('Purina Cat Chow', 10, false)
console.log(cat1)
const cat2 = new Cat('Fancy Feast', 5, true)
console.log(cat2)

class Pirate {
    constructor(steals, sails, swims) {
        this.steals = true;
        this.sails = true;
        this.swims = false;
    }
    walksThePlank() {
        console.log('Has made countless mates walk the plank');
    };
    scrubsTheDeck() {
        console.log('Delegates scrubbing the deck');
    };
    fishes() {
        console.log('Loves to fish');
    };
    toString(pirate = Pirate) {
        
        return `This ${pirate} ${this.steals ? 'does' : 'does not'} steal. He ${this.sails ? 'does' : 'does not'} sail, and ${this.swims ? 'can' : 'can not'} swim`;
    }    
}
const ship1 = ['Blackbeard','Captain Hook','Johnny Depp']
const ship2 = ['Pirate1','Pirate2','Pirate3']

for (ship of ship1) {
    let pirate = new Pirate;
    console.log(pirate.toString('pirate'))
}

// const p1 = new Cat('Purina Cat Chow', 10, false)
// console.log(cat1)
// const p2 = new Cat('Purina Cat Chow', 10, true)
// console.log(cat1)


