const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// create a navItems array equal to all a tags
let navItems = document.querySelectorAll('a');
// use the index of navItems to assign text content from our siteContent object
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
// like several times
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
// keep goin
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];
// there that was all of em

//same deal, grab the h1 from its querySelector and assign it text content from siteContent object
let h1 = document.querySelector('h1')
h1.textContent = siteContent["cta"]["h1"]

//above, but a button
let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];

//ids make it easy
let headerImg = document.getElementById("cta-img");
//lil curveball here, we've got to set the source attribute to our site content. ssdd
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainH4 = document.querySelectorAll('h4');
//make an array of h4s
mainH4[0].textContent = siteContent["main-content"]["features-h4"];
// let
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
// my
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
// people
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
// have
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];
// text content
mainH4[5].textContent = siteContent["contact"]["contact-h4"];

let pageTextContent = document.querySelectorAll(".text-content > p");
//not gonna lie this selector was giving me trouble
pageTextContent[0].textContent = siteContent["main-content"]["features-content"]
pageTextContent[1].textContent = siteContent["main-content"]["about-content"]
pageTextContent[2].textContent = siteContent["main-content"]["services-content"]
// yall already know
pageTextContent[3].textContent = siteContent["main-content"]["product-content"]
pageTextContent[4].textContent = siteContent["main-content"]["vision-content"]

let midImg = document.getElementById("middle-img");
// ids make the dream work
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactContent = document.querySelectorAll(".contact > p");
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

let footerContent = document.querySelector("footer");
footerContent.textContent = siteContent["footer"]["copyright"]

let newFirst = document.createTextNode("newchild1")
let newLast = document.createTextNode("newchild2")
let navI = document.querySelector('nav');
navI.style.background = "green";
navI.appendChild(newLast);
navI.prepend(newFirst);
