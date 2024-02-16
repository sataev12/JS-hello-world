// console.log("Hello JS")


// let numberToGuess = 2;
// numberToGuess +=3;
// numberToGuess -=2;
// numberToGuess++;
// numberToGuess*=10;
// numberToGuess/=2;
// numberToGuess%=7;
// numberToGuess--;

// console.log(numberToGuess);

// const prenom = "John";
// const nom = "Smith";
// const nomComplet = prenom + " " + nom;
// console.log("Je m'appelle " + nomComplet);

// console.log(`Je m'appelle ${prenom} ${nom}, soyez le bienvenu !`);

// console.log("1 : " + (2 == "2"));
// console.log("2 : " + (2 === "2"));
// console.log("3 : " + (2 != "2"));
// console.log("4 : " + (2 !== "2"));

// console.log("3 < 7 is" + (3 < 7)); //TRUE
// console.log("8 <= 1 is" + (8 <= 1));//FALSE
// console.log("7 >= 7 is" + (7 >= 7));//TRUE
// console.log("7 > 7 is" + (7 > 7)); //FALSE

// const ageJohn = 20;
// console.log("John est " + (ageJohn >= 18 ? "majeur" : "mineur") + " en France."); //concatenation
// console.log(`John est ${ageJohn >= 21 ? "majeur" : "mineur"} aux Etats-Unis.`); //interpolation

//BOOCLE FOR

// for (let i = 0; i < 10; i++) {
//     console.log(`3 x ${i} = ${3 * i}`);
// }

// for (let i = 0; i < 3; i++) {
//     console.log("Je serai un bon développeur");
// }

// for (let i = 3; i < 10; i+= 3) {
//     console.log(`${i} est inférieur ou égal à 10 et est divisible par 3`);
    
// }

// for (let  i = 5; i > 0; i--) {
//     console.log(`${i}....`);
// }
// console.log("Bonne année !");


//BOOCLE WHILE

// let kAge = 12;
// while (kAge < 18) {
//     console.log(`J'ai maintenant ${kAge} ans ...`);
//     kAge++;
// }
// console.log(`J'ai finalement ${kAge} ans.`);

//---------------------------------------DOM---------------------------------- //


// const cube = document.querySelector('#hello');

// console.log(cube);

// cube.style.width = '200px';
// cube.style.height = '200px';
// cube.style.color = 'blue';
// cube.style.backgroundColor = 'green'
// cube.style.display = 'flex'
// cube.style.aligneItems = 'centre'

// let list = document.querySelector("ul");

// let listElements = list.querySelectorAll("li");

// console.log("la liste", list);
// console.log("les éléments", listElements);

// listElements.forEach(function (element) {
//     element.style.color = "red";
// })

// listElements.forEach(function (element) {
//     console.dir(element);
//     element.style.color = "red";
// })

//----------------------------------------------JEU---------------------------------------------------//

function shuffleChildren(parent) {
    let children = parent.children;
    let i = children.length, k, temp;
    while (--i > 0) {
        k = Math.floor(Math.random() * (i+1))
        temp = children[k]
        children[k] = children[i]
        parent.appendChild(temp)
    }
}

function showReaction(type, clickedBox) {
    clickedBox.classList.add(type)
    if (type !== "success") {
        setTimeout(function () {
            clickedBox.classList.remove(type)
        }, 800)
    }
}

const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector("#board");

let nbBoîtes = prompt("Entrez un nombre des boîtes :");
let nb = 1;
for (let i = 1; i <= nbBoîtes; i++) {
    let newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);

    newbox.addEventListener("click", function () {
        if (i == nb) {
            newbox.classList.add("box-clicked");
            shuffleChildren(board);
            // 1
            if (nb == board.children.length) {
                board.querySelectorAll(".box").forEach(function (box) {
                    showReaction("success", box)
                })
            }
            nb++;
        }
        //2
        else if(i > nb){
            showReaction("error", newbox)
            shuffleChildren(board);
            nb = 1
            board.querySelectorAll(".box-clicked").forEach(function(validBox){
                validBox.classList.remove("box-clicked");
            })
        }
        // 3
        else{
            showReaction("notice", newbox)
        }
    })
}

// let i = board.children.length, k , temp;
// while(--i > 0){
//     //on boucle tant que 1 oté de i est toujours positif
//     // K stocke un nombre aléatoire basé sur i

//     k = Math.floor(Math.random() * (i+1))

//     // temp pointe temporairement l'élément k par l'élément à la position i 
//     temp = board.children[k];
//     // remplace l'élément à la position k par l'élément à la position i
//     board.children[k] = board.children[i]

//     // place l'élément k pointé temporairement à la fin du contenu de board
//     board.appendChild(temp)

//}

shuffleChildren(board);




