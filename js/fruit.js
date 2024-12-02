// Link Variables
var imgs = Array.from(document.getElementsByClassName("card-img-top"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var closeBtn = document.getElementById("closeBtn");
var currentIndexSlider = 0;
// add event listener to each image
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (eventInfo) {
    currentIndexSlider = imgs.indexOf(eventInfo.target);
    lightBoxContainer.style.display = "flex";
    var srcImg = eventInfo.target.src;
    lightBoxItem.style.backgroundImage = `url(${srcImg})`;
  });
}
// add event listener to closeBtn
closeBtn.addEventListener("click", closeSlider);
function closeSlider() {
  lightBoxContainer.style.display = "none";
}
// add event listener to nextBtn
nextBtn.addEventListener("click", nextSlide);
function nextSlide() {
  currentIndexSlider++;
  if (currentIndexSlider >= imgs.length) {
    currentIndexSlider = 0;
  }
  var srcImg = imgs[currentIndexSlider].src;
  lightBoxItem.style.backgroundImage = `url(${srcImg})`;
}
// add event listener to prevBtn
prevBtn.addEventListener("click", prevSlide);
function prevSlide() {
  currentIndexSlider--;
  if (currentIndexSlider < 0) {
    currentIndexSlider = imgs.length - 1;
  }
  var srcImg = imgs[currentIndexSlider].src;
  lightBoxItem.style.backgroundImage = `url(${srcImg})`;
}
// add event listener to key info
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 39) {
    nextSlide();
  } else if (e.keyCode == 37) {
    prevSlide();
  } else if (e.keyCode == 27) {
    closeSlider();
  }
});
