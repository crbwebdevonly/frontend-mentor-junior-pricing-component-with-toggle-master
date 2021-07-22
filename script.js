const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");

const toggleSwitch = document.getElementById("toggle-switch");
let monthly = true;
toggleSwitch.addEventListener("click", () => {
     toggleSwitch.classList.toggle("clicked");
     monthly = !monthly;

     if (monthly) {
          c1.childNodes[1].nodeValue = 19.99;
          c2.childNodes[1].nodeValue = 29.99;
          c3.childNodes[1].nodeValue = 39.99;
     } else {
          c1.childNodes[1].nodeValue = 199.99;
          c2.childNodes[1].nodeValue = 249.99;
          c3.childNodes[1].nodeValue = 399.99;
     }
});

// console.log(c1.childNodes[1].nodeValue);
// let amount = c1.innerText;
////console.log(amount.substring(0,1))
//c1.innerText = "$29.99"
