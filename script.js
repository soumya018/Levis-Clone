   // Wrap every letter in a span
var textWrapper = document.querySelector('.h2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.h2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.h2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var MainImg = document.getElementById("mainimg");
var smallImg = document.getElementByClassName("Imgs");

smallImg[0].onclick=function () {
    MainImg.src = smallImg[0].src;
}

smallImg[1].onclick=function () {
    MainImg.src = smallImg[1].src;
}

smallImg[2].onclick=function () {
    MainImg.src = smallImg[2].src;
}

smallImg[3].onclick=function () {
    MainImg.src = smallImg[3].src;
}




  

