// List of Inventors

const schools = [
    { name: 'Albert college', motto: 'To the sun we go', startYear: 1879 },
    { name: 'Isaac college', motto: 'We will keep building the future', startYear: 1643 },
    { name: 'Park-view college', motto: 'parking the kids for the future', startYear: 1564 },
    { name: 'Maron view', motto: 'Setting the way', startYear: 1867 },
    { name: 'Johannes college', motto: 'Kepler', startYear: 1571 },
    { name: 'Nicolaus college', motto: 'Copernicus', startYear: 1473 },
    { name: 'Max college', motto: 'Planck', startYear: 1858 },
    { name: 'Katherine college', motto: 'Blodgett', startYear: 1898 },
    { name: 'Ada city', motto: 'Lovelace', startYear: 1815 },
    { name: 'Sarah E. college', motto: 'Goode', startYear: 1855 },
    { name: 'Lise college', motto: 'Meitner', startYear: 1878 },
    { name: 'Hanna college', motto: 'Hammarström', startYear: 1829 }
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
    'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
    'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

// Array.prototype.filter()
const nineteenHundred = schools.filter(school => { school.startYear >= 1900 && school.startYear <= 1999) });

//   .map()
const schoolNameMotto = schools.map(school => `${school.name} ${school.motto}`);


// sort()

const ordered = schools.sort((a, b) => a.startYear > b.startYear ? 1 : -1);
console.table(ordered);

// Array.prototype.reduce()
const today = new Date();
const date = today.getFullYear();
const totalYears = schools.reduce((total, school) => {
return total + (date- school.startYear);
}, 0);
// console.log(totalYears);