let hr = document.querySelector('#hr')
let mn = document.querySelector('#mn')
let sc = document.querySelector('#sc')

setInterval(setClock,1000)


function setClock(){
  let day = new Date()
  let hh = day.getHours() * 30
  let mm = day.getMinutes() * 6
  let ss = day.getSeconds() * 6

  hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`

  let hour = document.getElementById('hour')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();


hour.innerHTML = h
minutes.innerHTML = m
seconds.innerHTML = s
ampm.innerHTML = am
}
setClock();




