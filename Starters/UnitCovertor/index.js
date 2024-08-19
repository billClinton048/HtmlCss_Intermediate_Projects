// Getting items from DOM

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const wrapper = document.getElementById("wrapper");
let ResultsArray = ["Meters/ Feet", "Volume(Liters / Gallons)", "Mass" ];



function renderImages(meters) {
      
  let resultsDOM = "";
  for (let i = 0; i < ResultsArray.length; i++) {
    resultsDOM += `<div id = "Content"> <h1> ResultsArray[i] There</h1>
    <p>hallo</p>
    
    </div>`;
  }
  wrapper.innerHTML = resultsDOM;
}

btn.addEventListener("click", () => {
    const inputData = Number(input.value);
    if(!isNaN(inputData) && inputData > 0 ){
        let meters =  inputData * 3.28
        const feets = 32.808 / inputData
        
        ResultsArray.push({ meters, feets });
        renderImages(meters)
    
    }else{
        console.log("Please enter a valid number greater tha 0")
    }

    
  });
  renderImages()