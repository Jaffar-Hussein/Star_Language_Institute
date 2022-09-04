const cloudinary = "https://res.cloudinary.com/hanancodes/"
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const quotes_url = "https://type.fit/api/quotes"
const assets = "https://starinstitute.herokuapp.com/assets"
const about = "https://starinstitute.herokuapp.com/about"
const courses = "https://starinstitute.herokuapp.com/all_courses/"
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
const about_founder = document.getElementById("about_founder")
const about_institute = document.getElementById("about_institute")
const founder_name = document.getElementById("founder_name")
const primary_phoneNumber = document.getElementById("primary_phoneNumber")
const secondary_phoneNumber = document.getElementById("secondary_phoneNumber")
const contact_email = document.getElementById("contact_email")
const tag_line = document.getElementById("tag_line")
const description_1 = document.getElementById("1_description")
const description_2 = document.getElementById("2_description")
const description_3 = document.getElementById("3_description")
const name_1 = document.getElementById("1_name")
const name_2 = document.getElementById("2_name")
const name_3 = document.getElementById("3_name")
const duration_1 = document.getElementById("1_duration")
const duration_2 = document.getElementById("2_duration")
const duration_3 = document.getElementById("3_duration")
const price_1 = document.getElementById("1_price")
const price_2 = document.getElementById("2_price")
const price_3 = document.getElementById("3_price")
const image_1 = document.getElementById("1_image")
const image_2 = document.getElementById("2_image")
const image_3 = document.getElementById("3_image")
// Consuming the quotes API

// Consuming custom API 
setTimeout(() => {
    const random =  Math.floor(Math.random()*100);
    fetch(quotes_url)
        .then((response) => response.json())
        .then(data => {
            quote.textContent = data[random].text
            author.textContent = data[random].author
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


// 

const form = document.getElementById("address-form");

// Consuming text content
aboutAPIconsumption(about_institute, "institute_description");
aboutAPIconsumption(about_founder, "about_founder");
aboutAPIconsumption(founder_name, "founder_name");
aboutAPIconsumption(primary_phoneNumber, "primary_phoneNumber");
aboutAPIconsumption(secondary_phoneNumber, "secondary_phoneNumber");
aboutAPIconsumption(contact_email, "contact_email");
aboutAPIconsumption(tag_line, "tag_line");

// Consuming courses data

coursesAPIconsumption(name_1,description_1,price_1,duration_1,image_1,0)
coursesAPIconsumption(name_2,description_2,price_2,duration_2,image_2,1)
coursesAPIconsumption(name_3,description_3,price_3,duration_3,image_3,2)

function aboutAPIconsumption(node, name) {
    fetch(about)
        .then(resp => resp.json())
        .then(data => {
            node.textContent = data[0][name]
        })
}

function coursesAPIconsumption(node_name, node_description, node_price, node_duration, node_course_Image, id) {
    fetch(courses)
        .then(resp => resp.json())
        .then(data => {
            // node_name.textContent = data[id]
            console.log(data[id]);
            node_description.textContent = data[id]["description"]
            node_name.textContent = data[id]["name"]
            node_price.textContent = data[id]["price"]
            node_course_Image.src = cloudinary + data[id]["course_Image"]
            node_duration.textContent = data[id]["duration"]
        })
}

function imageAPIConsumption(node, name) {
    fetch(assets)
        .then(resp => resp.json())
        .then(data => {
            node.src = cloudinary + data[0][name]
        })
}