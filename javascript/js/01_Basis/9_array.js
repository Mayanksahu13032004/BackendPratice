const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc);
// console.log(marvel);

const all=marvel.concat(dc)
console.log(all);

// spread

const all1=[...marvel,...dc]
console.log(all1);

const Array=["mayank"]
console.log(Array.isArray("mayank"));
// backend se data le k array me form karna phadtha hai is liye form kamuse karthe hai
console.log(Array.form("mayank"));
console.log(Array.form({name:"mayank"}));

