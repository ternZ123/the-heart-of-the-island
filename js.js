var slideIndex = 1;
      function Load(){
          showSlides(slideIndex);
      }
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        console.log(slides[slideIndex-1])
        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
      }

var slideIndexY = 1;
      function LoadY(){
          showSlidesY(slideIndexY);
      }
      function plusSlidesY(n) {
        showSlidesY(slideIndexY += n);
      }
      
      function currentSlideY(n) {
        showSlidesY(slideIndexY = n);
      }
      
      function showSlidesY(n) {
        var i;
        var slides = document.getElementsByClassName("mySlidesY");
        var dots = document.getElementsByClassName("dotY");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        console.log(slidesY[slideIndexY-1])
        slidesY[slideIndexY-1].style.display = "block"; 
        dots[slideIndexY-1].className += "active";
      }