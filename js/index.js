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
}
