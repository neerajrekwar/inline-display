// Javascript

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1FXLs0D7WurPOZOGFtAN95xIj_BPD8HI",
  authDomain: "neeraj-demo-a8b5e.firebaseapp.com",
  projectId: "neeraj-demo-a8b5e",
  storageBucket: "neeraj-demo-a8b5e.appspot.com",
  messagingSenderId: "661671522590",
  appId: "1:661671522590:web:9a9b27e87e21b2fec1190f",
  measurementId: "G-G1EEV0P5SB"
};

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth
  myheight = window.innerHeight

document.getElementById('full-size-h').innerHTML = 'Screen: ' + myWidth + "x" + myheight + ' px' ;

}
