document.addEventListener("DOMContentLoaded", function() {
  const animatedSapphire = document.getElementById("animated-sapphire");
  let pos = 0;
  let direction = 1;

  function animateAnimatedSapphire() {
    if (pos > window.innerWidth - 100 || pos < 0) direction *= -1;
    pos += direction * 5;
    animatedSapphire.style.left = pos + "px";
    requestAnimationFrame(animateAnimatedSapphire);
  }

  animateAnimatedSapphire();
});
