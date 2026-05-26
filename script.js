const thankYouState = document.querySelector('.thank-you-state');
const ratingState = document.querySelector('.rating-state');
const alertBox = document.querySelector('.alert-box');
const overlay = document.querySelector('.overlay');
const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.querySelector('button[type="submit"]');
const selectedRating = document.querySelector('.thank-you-state span');

let ratingValue = 0;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingValue = button.textContent;
    selectedRating.textContent = `You selected ${ratingValue} out of 5`;
    
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});

submitButton.addEventListener('click', () => {
  if (ratingValue > 0) {
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
  } else {
    alertBox.style.display = 'block';
    overlay.style.display = 'block';

    setTimeout(() => {
      alertBox.style.display = 'none';
      overlay.style.display = 'none';
    }, 5000);
  }
});

overlay.addEventListener('click', () => {
  alertBox.style.display = 'none';
  overlay.style.display = 'none';
});