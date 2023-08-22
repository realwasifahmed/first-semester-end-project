let faqs = document.querySelectorAll(".toggle");
let faqAnswers = document.querySelectorAll(".faq-answer");
let iconchange = document.querySelectorAll(".uil-angle-down")

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener('click', () => {
    faqAnswers[i].classList.toggle('faq-active');
    iconchange[i].classList.toggle('uil-angle-ch')
  });
}

