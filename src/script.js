const cloudinary = "https://res.cloudinary.com/hanancodes/"
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const quotes_url = "https://type.fit/api/quotes"
const assets = "https://starinstitute.herokuapp.com/assets"
const hero_desktop = document.getElementById("hero_desktop")
const hero_mobile = document.getElementById("hero_mobile")
const hero_svg1 = document.getElementById("hero_svg1")
const hero_svg2 = document.getElementById("hero_svg2")
const hero_svg3 = document.getElementById("hero_svg3")
const hero_svg4 = document.getElementById("hero_svg4")
const hero_svg5 = document.getElementById("hero_svg5")
const about_mobile = document.getElementById("about_mobile")
const about_desktop = document.getElementById("about_desktop")
const logo = document.getElementById("logo");
// Consuming the quotes API

// Consuming custom API 
setTimeout(() => {
    const random = 2;
    fetch(quotes_url)
        .then((response) => response.json())
        .then(data => {
            quote.textContent =  data[0].text
            author.textContent = data[0].author
            // console.log(data[0]);
            // const quote = data[0][random]
        })
}, 3000)
// Consuming images
imageAPIConsumption(logo, "logo");
imageAPIConsumption(hero_desktop, "hero_desktop");
imageAPIConsumption(about_mobile, "about_mobile");
imageAPIConsumption(hero_mobile, "hero_mobile");
imageAPIConsumption(hero_svg1, "hero_svg1")
imageAPIConsumption(hero_svg2, "hero_svg2")
imageAPIConsumption(hero_svg3, "hero_svg3")
imageAPIConsumption(hero_svg4, "hero_svg4")
imageAPIConsumption(hero_svg5, "hero_svg5")
imageAPIConsumption(about_desktop, "about_desktop")

function imageAPIConsumption(node, name) {
    fetch(assets)
        .then(resp => resp.json())
        .then(data => {
            node.src = cloudinary + data[0][name]
        })
}

// 

const form = document.getElementById("address-form");