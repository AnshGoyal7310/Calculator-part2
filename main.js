const val = (result) => {
   forms.display.value += result;
}

const calc = () => {
   if (forms.display.value == "") {
      alert("Enter Values");
   } else {
      forms.display.value = eval(forms.display.value);
   }
}

const btn = document.getElementById("clear");
btn.addEventListener("click",() => {
   forms.display.value = " ";
})