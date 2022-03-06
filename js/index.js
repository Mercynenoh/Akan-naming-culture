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

let gender = document.getElementById("gender").value;
  console.log(gender);


  let f = submit[date];

  if (gender==='male') {
    var submit = ['Your Akan name is Kwasi', 'Your Akan name is Kwadwo', 'Your Akan name is Kwabena', 'Your Akan name is Kwaku', 'Your Akan name is Yaw', 'Your Akan name is Kofi', 'Your Akan name is Kwame', 'Your Akan name is Kwasi']
    document.getElementById('output2').textContent = submit[date];


    console.log(males[f])
  }
    if (gender === 'female') {
      var submit = ['Your Akan name is Akosua', 'Your Akan name is Adwoa', 'Your Akan name is Abenaa', 'Your Akan name is Akua', 'Your Akan name is Yaa', 'Your Akan name is Afua', 'Your Akan name is Ama', 'Your Akan name is Akosua']
      document.getElementById('output2').textContent = submit[date];

      console.log(females[f])
  }
  }


