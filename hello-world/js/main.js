console.log("Hello JS")


let numberToGuess = 2;
numberToGuess +=3;
numberToGuess -=2;
numberToGuess++;
numberToGuess*=10;
numberToGuess/=2;
numberToGuess%=7;
numberToGuess--;

console.log(numberToGuess);

const prenom = "John";
const nom = "Smith";
const nomComplet = prenom + " " + nom;
console.log("Je m'appelle " + nomComplet);

console.log(`Je m'appelle ${prenom} ${nom}, soyez le bienvenu !`);

console.log("1 : " + (2 == "2"));
console.log("2 : " + (2 === "2"));
console.log("3 : " + (2 != "2"));
console.log("4 : " + (2 !== "2"));

console.log("3 < 7 is" + (3 < 7)); //TRUE
console.log("8 <= 1 is" + (8 <= 1));//FALSE
console.log("7 >= 7 is" + (7 >= 7));//TRUE
console.log("7 > 7 is" + (7 > 7)); //FALSE

const ageJohn = 20;
console.log("John est " + (ageJohn >= 18 ? "majeur" : "mineur") + " en France."); //concatenation
console.log(`John est ${ageJohn >= 21 ? "majeur" : "mineur"} aux Etats-Unis.`); //interpolation

for (let i = 0; i < 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}

for (let i = 0; i < 3; i++) {
    console.log("Je serai un bon développeur");
}

for (let i = 3; i < 10; i+= 3) {
    console.log(`${i} est inférieur ou égal à 10 et est divisible par 3`);
    
}