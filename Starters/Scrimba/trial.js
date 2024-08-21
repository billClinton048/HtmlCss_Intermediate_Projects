import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue

} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leadstracker-129f0-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);
const referencing = ref(dataBase, "Birthdays");

onValue(referencing, function(snapshot){
    console.log(snapshot.val())
})

const inputButton = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  push(referencing, inputButton.value);
  inputButton.value = " "
});
