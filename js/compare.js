data = [
    {
        "id": 0,
        "title": "",
        "price": "",
        "description": "",
        "brand": "",
        "image": "",
        "productlink": ""
    },
    
    {
        "id": 1,
        "title": "Arias Perfume Body Spray",
        "price": "$599.00",
        "description": "Introducing Arias Perfume Body Spray, an exquisite fragrance that captivates the senses and leaves an enchanting trail wherever you go. Immerse yourself in a symphony of enticing notes that blend seamlessly to create a truly unforgettable experience.",
        "brand": "Lumina",
        "image": "../Products/Product Image/6.webp",
        "productlink": "/Products/Arias Perfume Body Spray.html"
    },
    {
        "id": 2,
        "title": "Bella Vita Organic Gold Woman",
        "price": "$399.00",
        "description": "Introducing Bella Vita Organic Gold Woman, a luxurious perfume that embodies the essence of elegance and sophistication. Immerse yourself in the opulence of this captivating fragrance and experience the allure it brings to every moment.",
        "brand": "Lumina",
        "image": "../Products/Product Image/7.webp",
        "productlink": "/Products/Bella Vita Organic Gold Woman.html"
    },
    {
        "id": 3,
        "title": "Bella Vita Organic Luxury Perfumes",
        "price": "$499.00",
        "description": "Introducing Bella Vita Organic Luxury Perfumes, an exquisite collection of fragrances that will transport your senses to a world of opulence and allure. Immerse yourself in the captivating scents crafted with utmost care, and experience the essence of true luxury.",
        "brand": "Lumina",
        "image": "../Products/Product Image/8.webp",
        "productlink": "/Products/Bella Vita Organic Luxury Perfumes.html"
    },
    {
        "id": 4,
        "title": "Best Fragrance Set For Unisex Aquatic",
        "price": "$799.00",
        "description": "Introducing the Best Fragrance Set for Unisex Aquatic, a collection of captivating perfumes that embody the essence of the ocean and unleash a wave of freshness and allure. Immerse yourself in the invigorating scents crafted to suit both men and women, and experience the magic of aquatic fragrances.",
        "brand": "Lumina",
        "image": "../Products/Product Image/9.webp",
        "productlink": "/Products/Best Fragrance Set For Unisex Aquatic.html"
    },
    {
        "id": 5,
        "title": "farzad Body Spray",
        "price": "$599.00",
        "description": "Introducing Farzad Body Spray, a fragrance that embodies elegance, confidence, and sophistication. Experience the captivating allure of this exquisite perfume as it envelops you in a veil of irresistible aroma.",
        "brand": "Lumina",
        "image": "../Products/Product Image/3.webp",
        "productlink": "/Products/farzad Body Spray.html"
    },
    {
        "id": 6,
        "title": "Fresh Unisex Perfume",
        "price": "$399.00",
        "description": "Introducing Fresh Unisex Perfume, a fragrance that captivates both men and women with its invigorating and uplifting aroma. Immerse yourself in the essence of freshness and experience a scent that transcends gender boundaries.",
        "brand": "Lumina",
        "image": "../Products/Product Image/14.webp",
        "productlink": "/Products/Fresh Unisex Perfume.html"
    },

]


for (var i = 1; i < data.length; i++){
    document.getElementById('select1').innerHTML += `
    <option value="${i}">${data[i].title}</option>
    `
    document.getElementById('select2').innerHTML += `
    <option value="${i}">${data[i].title}</option>
    `
}
function item1(a){
    var select2 = document.getElementById("select2").value
    var alertbox = document.getElementById("alertbox")
    if(a != select2){
        document.getElementById("img1").src = data[a].image;
        document.getElementById("price1").innerHTML = data[a].price;
        document.getElementById("desc1").innerHTML = data[a].description;
        document.getElementById("brand1").innerHTML = data[a].brand;
        document.getElementById("btn1").setAttribute("href", data[a].productlink);
    }else{
        alertbox.classList.toggle('alertshownow')
    }
}
function item2(a){
    var select1 = document.getElementById("select1").value
    var alertbox = document.getElementById("alertbox")
 
    if(a != select1){
    document.getElementById("img2").src = data[a].image;
    document.getElementById("price2").innerHTML = data[a].price;
    document.getElementById("desc2").innerHTML = data[a].description;
    document.getElementById("brand2").innerHTML = data[a].brand;
    document.getElementById("btn2").setAttribute("href", data[a].productlink);
    }else{
        alertbox.classList.toggle('alertshownow')
    }
}

var closealertbox = document.getElementById("closealertbox");
closealertbox.addEventListener("click", function() {
    alertbox.classList.toggle('alertshownow');
});