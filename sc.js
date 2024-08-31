// var acc = document.getElementsByClassName("acco-btn");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//    var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// function fibonacciGenerator (n) {
  let n=4
  let fib = [0,1];
  for (let i=0; i< fib.length; i++){
     console.log(fib[i])
    fib[i]= fib[i-1] + fib[i-2]
  
  } 
  
  // return fib
  // }
  // console.log(fibonacciGenerator(2))
