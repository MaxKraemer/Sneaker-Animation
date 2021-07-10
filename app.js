//Movement Animation
let card = document.querySelector(".card");
let container = document.querySelector(".container");

//Items Move
let title = document.querySelector(".title");
let sneaker = document.querySelector(".sneaker img");
let purchase = document.querySelector(".purchase");
let description = document.querySelector(".info h3");
let sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

// animation In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";

});

//animation out

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transition = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

});

