document.getElementById("year").innerHTML = new Date().getFullYear();

const circles = document.querySelectorAll('.progress-ring__circle');
const percentages = [100, 75, 45, 20]; // Set this to the percentages you want to display for each progress bar

circles.forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  function setProgress(percent) {
    const offset = percent / 100 * circumference;
    circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
    circle.style.strokeDashoffset = circumference - offset;
  }
  
  
  // Set initial progress to zero
  setProgress(0);

  window.addEventListener('scroll', function() {
    // Get the position of the progress bar
    const progressBarPosition = circle.getBoundingClientRect().top + window.scrollY;

    // Check if the progress bar is in the viewport
    if (window.scrollY > progressBarPosition - window.innerHeight) {
      // Animate the progress bar
      setProgress(percentages[index]);
    }
  });
});
