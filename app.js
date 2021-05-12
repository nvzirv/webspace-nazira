// alert('Welcome, dear visitor 🤓')

let body = document.body;

function transformScroll(event) {
    if (!event.deltaY) {
      return;
    }
  
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }
  
  var element = document.scrollingElement || document.documentElement;
  element.addEventListener('wheel', transformScroll);



  
  function myFunction() {
  var x = document.getElementById("b2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myFunction1() {
    var x = document.getElementById("b3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction2() {
    var x = document.getElementById("b4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//   function myFunction3() {
//     var x = document.getElementById("b4");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }




var today = new Date();
var hours = today.getHours();

if (hours > 17 || hours < 6) {

  document.body.className = "night"
//   let blurred = document.querySelector('.square')
//   blurred.classList.add('blur');
}
  
else
  // Else use ‘day’ class
  document.body.className = "day";

  let checkThis= document.querySelector('.b4');
checkThis.addEventListener('click', function(){
    // let r = Math.floor(Math.random() * 255)
    // let g = Math.floor(Math.random() * 255)
    // let b = Math.floor(Math.random() * 255)
    // body.style.setProperty('background-color', 'rgb(' +r+ ',' +g+',' +b+')');
})

//   function rotate() {
//     let all = document.body.querySelectorAll('*');
//     let x = Math.floor(Math.random() * 40);

//     for (each of all) {
//         each.style.setProperty('transform', 'rotateZ(' +x+ 'deg)');
//     }

// let checkThis= document.querySelector('.check-this');
// checkThis.addEventListener('mouseover', function(){
//     let r = Math.floor(Math.random() * 255)
//     let g = Math.floor(Math.random() * 255)
//     let b = Math.floor(Math.random() * 255)
//     body.style.setProperty('background-color', 'rgb(' +r+ ',' +g+',' +b+')');
// })

// function rotate() {
//     let all = document.body.querySelectorAll('*');
//     let x = Math.floor(Math.random() * 40);

//     for (each of all) {
//         each.style.setProperty('transform', 'rotateZ(' +x+ 'deg)');
//     }


// setTimeout(function() {rotate()}, 3000);

document.addEventListener('mousemove', rotate);
