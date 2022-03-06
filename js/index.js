function day() {

  let input = document.getElementById("dob").value;
  let day = new Date(input).getUTCDay();
  var submit = ['Your Day of Birth was : sunday', 'Your Day of Birth was : monday', 'Your Day of Birth was : tuesday', 'Your Day of Birth was : wednesday', 'Your Day of Birth was : thursday', 'Your Day of Birth was : friday', 'Your Day of Birth was : saturday', 'Your Day of Birth was : sunday'];
  document.getElementById('output').textContent = submit[day]
  

}

function date() {
  let males = {
      monday:"Kwadwo",
      tuesday:"kwabena",
      wednesday:"Kwaku",
      thursday:"Yaw",
      friday:"Kofi",
      saturday:"Kwame",
      sunday:"Kwasi"
  }
  let females ={
    monday:"Adwoa",
    tuesday:"Abenaa",
    wednesday:"Akua",
    thursday:"Yaa",
    friday:"Afua",
    saturday:"Ama",
    sunday:"Akosua"
}
let input = document.getElementById("dob").value;
let date = new Date(input).getUTCDay();
console.log(date)
var submit = [' You were born on sunday', 'You were born on monday', 'You were born on tuesday', 'You were born on wednesday', 'You were born on thursday', ' You were born on friday', 'You were born on saturday', 'You were born on sunday'];
document.getElementById('output').textContent = submit[date];


}
