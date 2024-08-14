window.onload = function() {
    const imagem = document.querySelector('.imgInicio');
    const texto = document.querySelector('.txtInicio');

    setTimeout(function() {
        imagem.classList.add('entrada');
        texto.classList.add('entrada');
    }, 500); 
};

// abaixo sobre o carrosel


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

 


    

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card0");
  let dots = document.getElementsByClassName("dot");


  let maxVisibleSlides;
  
  if(window.innerWidth <= 1200){
    nSd = 6;
  } else {
    nSd = 3;
  } 

  maxVisibleSlides = nSd;
      


  if (n > slides.length - maxVisibleSlides + 1) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length - maxVisibleSlides + 1}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  for (i = 0; i < maxVisibleSlides; i++) {
    slides[slideIndex + i - 1].style.display = "block";
  }

  dots[slideIndex-1].className += " active";
}




// abaixo sobre o filtro


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}






































