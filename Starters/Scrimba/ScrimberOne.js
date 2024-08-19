let points = 0;
let hasWon = false;
const player = "clinton";
const game = "AmazingFighter";
const opponent = "karanja";

points += 100;
hasWon = true;

// Announcing the Winner
if (hasWon) {
  console.log(`${player} Got ${points} points and he won the ${game} game!`);
} else {
  console.log(`The winner is ${opponent}! player ${player} lost the game`);
}

// Function
let myArray = ["Animations", "Design", "CleanCode"];

function myFunction(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

myFunction(myArray);

// working with localstorage
// localStorage.setItem( "myData", "100")
//  fetching the data from localStorage
let myData = localStorage.getItem("myData");
console.log(myData);

let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]
// buttons fetching 
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log(`${data[0].player} has scored ${data[0].score}`);
});


// generate sentence 
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2", "Elgon "])
console.log(sentence)


// dealing images 
const container = document.getElementById("container")


// Dealing with images 
const imgs = [
    "images/CatOne.jpg",
    "images/CatTwo.jpg",
    "images/CatThree.jpg"
]

function renderImages(){
    let imgsDOM = ""
    for(let i = 0; i < imgs.length; i++ ){
        imgsDOM += `<img alt="Employee In the COmpany" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()


// number literals
const totalPrice = 420.69234254435
const pcsBtn = document.getElementById("purchase-btn")
pcsBtn.textContent = `Buy $${ totalPrice.toFixed(2) }`
