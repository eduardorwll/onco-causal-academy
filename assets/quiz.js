// learn/assets/quiz.js - Reusable Quiz and Interactive Feedback Component

function handleQuiz(optionEl, isCorrect, correctText, incorrectText) {
  const box = optionEl.closest('.quiz-box');
  const options = box.querySelectorAll('.quiz-option');
  const feedback = box.querySelector('.quiz-feedback');
  
  // Disable further clicks in this box
  options.forEach(opt => {
    opt.style.pointerEvents = 'none';
  });
  
  if (isCorrect) {
    optionEl.classList.add('correct');
    feedback.textContent = '✓ ' + correctText;
    feedback.className = 'quiz-feedback show-correct';
  } else {
    optionEl.classList.add('incorrect');
    feedback.textContent = '✗ ' + incorrectText;
    feedback.className = 'quiz-feedback show-incorrect';
    
    // Highlight the correct one
    options.forEach(opt => {
      if (opt.getAttribute('data-correct') === 'true') {
        opt.classList.add('correct');
      }
    });
  }
}
