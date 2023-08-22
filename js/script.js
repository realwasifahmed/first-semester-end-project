const plus = document.querySelector(".plus"),
    num = document.querySelector(".num"),
    mius = document.querySelector(".mius");

let a = 1;
plus.addEventListener('click', () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    // console.log('a')
})

mius.addEventListener('click', () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
})


function QuickViewFunction(quickViewContainerId, quickViewCloseId, quickViewShowClass) {
    const quickViewContainers = document.querySelectorAll('#' + quickViewContainerId);
    const quickViewCloses = document.querySelectorAll('#' + quickViewCloseId);
    const quickViewShows = document.querySelectorAll('.' + quickViewShowClass);

    quickViewShows.forEach((quickViewShow) => {
        quickViewShow.addEventListener('click', () => {
            quickViewContainers.forEach(container => {
                container.classList.remove('quickviewhideshow');
                container.classList.add('quickviewhow');
            });
        });
    });

    quickViewCloses.forEach((quickViewClose) => {
        quickViewClose.addEventListener('click', () => {
            quickViewContainers.forEach(container => {
                container.classList.add('quickviewhideshow');
                container.classList.remove('quickviewhow');
            });
        });
    });
}

QuickViewFunction('ParfumeMilloCedro', 'ParfumeMilloCedroClose', 'ParfumeMilloCedroShow');
QuickViewFunction('VeryVanillaPerfume', 'VeryVanillaPerfumeClose', 'VeryVanillaPerfumeShow');
QuickViewFunction('ParkAvenuePerfumeSpray', 'ParkAvenuePerfumeSprayClose', 'ParkAvenuePerfumeSprayShow');
QuickViewFunction('KelynEauDeParfumComboForMen', 'KelynEauDeParfumComboForMenClose', 'KelynEauDeParfumComboForMenShow');
QuickViewFunction('FarzadBodySpray', 'FarzadBodySprayClose', 'FarzadBodySprayShow');
QuickViewFunction('BellaVitaOrganicGoldWoman', 'BellaVitaOrganicGoldWomanClose', 'BellaVitaOrganicGoldWomanShow');
QuickViewFunction('BellaVitaOrganicLuxury', 'BellaVitaOrganicLuxuryClose', 'BellaVitaOrganicLuxuryShow');
QuickViewFunction('AriasPerfumeBodySpray', 'AriasPerfumeBodySprayClose', 'AriasPerfumeBodySprayShow');
QuickViewFunction('JaguarForMen', 'JaguarForMenClose', 'JaguarForMenShow');
QuickViewFunction('UnisexPerfume', 'UnisexPerfumeClose', 'UnisexPerfumeShow');
QuickViewFunction('FreshUnisex', 'FreshUnisexClose', 'FreshUnisexShow');
QuickViewFunction('goodVibes', 'goodVibesClose', 'goodVibesShow');




//Featured Products Show and Hide.

let buttons = document.querySelectorAll('.featuredbtn');
let featuredContainers = document.querySelectorAll('.featuredContainer');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        buttons.forEach((btn) => {
            if (btn === button) {
                btn.classList.add('activefeaturedbtn');
            } else {
                btn.classList.remove('activefeaturedbtn');
            }
        });

        featuredContainers.forEach((container) => {
            container.classList.remove('activefeature');
        });

        featuredContainers[index].classList.add('activefeature');
    });
});





const header = document.getElementById("nav");
let prevScrollPos = window.scrollY;

function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

function handleScroll() {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        header.classList.add("sticky");
        header.classList.add("static");
    } else {
        header.classList.remove("sticky");
    }

    prevScrollPos = currentScrollPos;
}

const debouncedScroll = debounce(handleScroll, 10);
window.addEventListener("scroll", debouncedScroll);
