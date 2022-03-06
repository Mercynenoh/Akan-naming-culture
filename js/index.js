function date() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
let input = month + "/" + day + "/" + year
  let date = new Date(input).getDay();
  console.log(date)
  var submit = ['You were born on sunday', 'You were born on monday', 'You were born on tuesday', 'You were born on wednesday', 'You were born on thursday', ' You were born on friday', 'You were born on saturday', 'You were born on sunday'];
  document.getElementById('output').textContent = submit[date];
   



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

  let gender = document.getElementById("gender").value;
  console.log(gender);


  let f = submit[date];

  if (day<=0 || day>31){

 alert("Invalid day!");
}
 else if(month<=0 ||month >12){
    alert("Invalid month!");
 }
 else if (year<=1950 || year>2022){
   alert("Invalid year value!");
 }
 else{

 

  if (gender==='male') {
    var submit = ['Your Akan name is Kwasi','Your Akan name is Kwadwo', 'Your Akan name is Kwabena', 'Your Akan name is Kwaku', 'Your Akan name is Yaw', 'Your Akan name is Kofi', 'Your Akan name is Kwame', 'Your Akan name is Kwasi']
    document.getElementById('output2').textContent = submit[date];


    console.log(males[f])
  }

  if (gender === 'female') {
      var submit = ['Your Akan name is Akosua', 'Your Akan name is Adwoa', 'Your Akan name is Abenaa', 'Your Akan name is Akua', 'Your Akan name is Yaa', 'Your Akan name is Afua', 'Your Akan name is Ama', 'Your Akan name is Akosua']
      document.getElementById('output2').textContent = submit[date];

      console.log(females[f])
  }
}
}
// confirm("Would you like to continue?")

