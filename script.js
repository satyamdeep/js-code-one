let getCountry = document.querySelector("#country");

getCountry.addEventListener("change", function() {
    let selectedValue = getCountry.options[getCountry.selectedIndex].value;
    selected.innerText = selectedValue;
    console.log(getCountry.options[getCountry.selectedIndex].value);

});

let n = 1;
 document.getElementById("count").innerText = n

 function inc() {
    n++;
    document.getElementById("count").innerText = n
 }

 function dec() {
    if (n > 1) {
        n--;
        document.getElementById("count").innerText = n;
    }
 }