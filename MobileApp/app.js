import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leadstracker-129f0-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);

const referencingInDatabase = ref(dataBase, "Leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

onValue(referencingInDatabase, function (snapshot) {
  const snapshotExist = snapshot.exists();

  if (snapshotExist) {
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);
  }
});

deleteBtn.addEventListener("click", function () {
  remove(referencingInDatabase);
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
  push(referencingInDatabase, inputEl.value);
  inputEl.value = "";
});
