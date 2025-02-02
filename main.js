const billInput = document.getElementById("billInput");
const peopleInput = document.getElementById("peopleInput");
const tipButtons = document.querySelectorAll(".btn");
const restButton = document.getElementById("rest");
const firstTip = document.getElementById("firstTip");
const secondTip = document.getElementById("secondTip");
const custom = document.getElementById("custom");
const inputCostom = document.getElementById("inputCostom");


function caculateTip() {
    let bill = parseFloat(billInput.value);
    let people = parseFloat(peopleInput.value);

    if  (bill > 0 && people > 0) {
        let tipAmount = (bill* (selectedTip /100)/ people);
        let tipTotall = (bill + tipAmount) / people;

        firstTip.textContent = `${tipAmount.toFixed(2)}$`;
        secondTip.textContent = `${tipTotall.toFixed(2)}$`;
    }
}

tipButtons.forEach(btn => {
    btn.addEventListener("click", function(){
      selectedTip = parseFloat(btn.textContent);
      caculateTip();
    });
});

custom.addEventListener("click", ()=> {
    inputCostom.style.display = "block";
    inputCostom.focus();
});

inputCostom.addEventListener("input", ()=> {
    selectedTip = parseFloat(inputCostom.value);
    caculateTip ();
});

restButton.addEventListener ("click", ()=> {
    billInput.value = "";
    peopleInput.value = "";
    inputCostom.value = "";
    selectedTip = 0;

    firstTip.textContent = "$0.00";
    secondTip.textContent = "$0.00";
})