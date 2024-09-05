let myName = document.getElementById("myName");



myName.innerHTML = prompt("Adınız nedir:")



let myClock = document.querySelector("#myClock")


function showTime(){
      // Şu anki zamanı al
      var currentDate = new Date();
     // alert(currentDate);

      // Tarih ve saat bilgisini al
      var year = currentDate.getFullYear();
      var month = currentDate.getMonth();
      var day = currentDate.getDate(); 
      var hours = currentDate.getHours(); 
      var minutes = currentDate.getMinutes(); 
      var seconds = currentDate.getSeconds(); 
  
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

}

const d = new Date();
let day = d.getDay();
function getClock() {
    day == 1 ? day = "Pazartesi" : day == 2 ? day="Salı" : day == 3 ? day = "Çarşamba" : day == 4 ? day = "Perşembe": day == 5 ? day="Cuma": day == 6 ? day = "Cumartesi": day="Pazar"}
    getClock()

myClock.innerHTML= `${showTime()} ${day}`
