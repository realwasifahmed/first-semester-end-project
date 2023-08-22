var availabilityButtons = document.querySelectorAll(".filter-by-availablity .filter-btn");

availabilityButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var icon = button.querySelector("i");

    availabilityButtons.forEach(function(btn) {
      btn.classList.remove("selected");
      btn.querySelector("i").classList.remove("uil-check-square");
      btn.querySelector("i").classList.add("uil-square-full");
    });

    if (!button.classList.contains("selected")) {
      button.classList.add("selected");
      icon.classList.remove("uil-square-full");
      icon.classList.add("uil-check-square");
    }
  });
});

var brandButtons = document.querySelectorAll(".filter-by-brands .filter-btn");

brandButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var icon = button.querySelector("i");

    brandButtons.forEach(function(btn) {
      btn.classList.remove("selected");
      btn.querySelector("i").classList.remove("uil-check-square");
      btn.querySelector("i").classList.add("uil-square-full");
    });

    if (!button.classList.contains("selected")) {
      button.classList.add("selected");
      icon.classList.remove("uil-square-full");
      icon.classList.add("uil-check-square");
    }
  });
});

var capacityButtons = document.querySelectorAll(".filter-by-capacity .filter-btn");

capacityButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var icon = button.querySelector("i");

    capacityButtons.forEach(function(btn) {
      btn.classList.remove("selected");
      btn.querySelector("i").classList.remove("uil-check-square");
      btn.querySelector("i").classList.add("uil-square-full");
    });

    if (!button.classList.contains("selected")) {
      button.classList.add("selected");
      icon.classList.remove("uil-square-full");
      icon.classList.add("uil-check-square");
    }
  });
});


const allFilterItems = document.querySelectorAll('.allFilterItems');
const allFilterbtns = document.querySelectorAll('.filter-btn');

allFilterbtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showFilteredContent(btn);
  });
});

function showFilteredContent(btn){
  allFilterItems.forEach((item)=>{
    if(item.classList.contains(btn.id)){
      item.style.display = "block";
    }else{
      item.style.display = "none";
    }
  });
}
