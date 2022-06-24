const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const dropdown = document.querySelector('.dropdown');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
    hero, 
    1, 
    { height: "0%" }, 
    { height: "80%", ease: Power2.easeInOut })
.fromTo(
    hero, 
    1.2, 
    { width: "100%" }, 
    { width: "80%", ease: Power2.easeInOut }
)
.fromTo(
    slider, 1.2,
    {x: "-100%"}, 
    {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(
    logo, 0.5, 
    { opacity: 0, x: 30 }, 
    { opacity: 1, x: 0 }, "-=0.5")
.fromTo(
    dropdown, 0.5, 
    { opacity: 0, x: 30 }, 
    { opacity: 1, x: 0 }, "-=0.5")
.fromTo(
    headline, 0.5, 
    { opacity: 0, x: 30 }, 
    { opacity: 1, x: 0 }, "-=0.5")