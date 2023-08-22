const plus = document.querySelector(".plus"),
    num = document.querySelector(".num"),
    mius = document.querySelector(".mius");

let a = 1;
plus.addEventListener('click', () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log('a')
})

mius.addEventListener('click', () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
})

function addActiveClass() {
    const pElements = document.querySelectorAll('.details-attribute p');
  
    pElements.forEach((pElement) => {
      pElement.addEventListener('click', () => {
        // Remove the .at-active class from all <p> elements
        pElements.forEach((p) => {
          p.classList.remove('at-active');
        });
  
        // Add the .at-active class to the clicked <p> element
        pElement.classList.add('at-active');
      });
    });
  }
  
  // Call the function to activate the click behavior
  addActiveClass();