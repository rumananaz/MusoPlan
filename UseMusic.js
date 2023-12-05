const prompt = require('prompt-sync')();

class Musician {
  constructor(name, instrument, yearsPlaying, hourlyRate) {
    this.name = name;
    this.instrument = instrument;
    this.yearsPlaying = yearsPlaying;
    this.hourlyRate = hourlyRate;
  }

  describeInterestingFact() {
    switch (this.instrument) {
      case 'guitarist':
        return 'The more strings you have, the better you are';
      case 'bassist':
        return 'Everyone loves a bassist';
      case 'percussionist':
        return 'Me drum';
      case 'flautist':
        return '1989 heavy metal instrument of the year';
      default:
        return 'No interesting fact available';
    }
  }

  introduceYourself() {
    console.log(`Hi, I'm ${this.name}, a ${this.instrument}.`);
    console.log(`I've been playing for ${this.yearsPlaying} years.`);
    console.log(`My hourly rate is $${this.hourlyRate}.`);
    console.log(`Interesting fact: ${this.describeInterestingFact()}\n`);
  }
}

class Troupe {
  constructor(name, minDuration, genre) {
    this.name = name;
    this.minDuration = minDuration;
    this.genre = genre;
    this.musicians = [];
  }

  addMusician(musician) {
    if (this.musicians.length < 5) {
      this.musicians.push(musician);
      console.log(`${musician.name} added to ${this.name}.\n`);
    } else {
      console.log('Cannot add more than 5 musicians to a troupe.\n');
    }
  }

  calculateCost(hours) {
    const totalRate = this.musicians.reduce((acc, musician) => acc + musician.hourlyRate, 0);
    return totalRate * hours;
  }

  summaryDescription() {
    console.log(`Troupe: ${this.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Minimum Duration: ${this.minDuration} hours`);
    console.log(`Hourly Rate for the whole troupe: $${this.calculateCost(1)}\n`);
  }

  detailedDescription() {
    this.summaryDescription();
    this.musicians.forEach(musician => musician.introduceYourself());
  }
}

// Prompt the user for musician information
const musicianName = prompt('Enter musician name: ');
const instrument = prompt('Enter instrument (guitarist, bassist, percussionist, flautist): ');
const yearsPlaying = parseInt(prompt('Enter years playing: '), 10);
const hourlyRate = parseFloat(prompt('Enter hourly rate: '));

// Create a musician using user input
const musician = new Musician(musicianName, instrument, yearsPlaying, hourlyRate);

// Prompt the user for troupe information
const troupeName = prompt('Enter troupe name: ');
const minDuration = parseFloat(prompt('Enter minimum duration (hours): '));
const genre = prompt('Enter genre (rock, jazz, pop): ');

// Create a troupe using user input
const troupe = new Troupe(troupeName, minDuration, genre);

// Add the musician to the troupe
troupe.addMusician(musician);

// Display Troupe Descriptions
troupe.summaryDescription();
troupe.detailedDescription();