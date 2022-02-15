$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            var element = document.querySelector(".navbar");
            element.classList.add("shadowed");
            var logo = document.querySelector(".logo");
            logo.classList.remove("position");
            logo.classList.add("change");

        } else {
            var element = document.querySelector(".navbar");
            element.classList.remove('shadowed');
            var logo = document.querySelector(".logo");
            logo.classList.add("position");
            logo.classList.remove("change");

        }
    });
});



// hero elements -  animation
gsap.set(".coolText div", { yPercent: -103 });
gsap.set(".coolText", { autoAlpha: 1 });
const tl = gsap.timeline({})
tl.from('#carouselExampleControls', { duration: 3, x: 100, y: -100, opacity: 0 })
    .from('.navbar-brand, .logo, .nav-item', { duration: 3, autoAlpha: 0 }, '<')

    .to(".coolText div", { duration: 2, yPercent: 0, stagger: 0.05, ease: "expo.inOut" }, "-=3.5")
    .to(".coolText div:not([data-char='.'])", { duration: 1, yPercent: 103, stagger: 0.1, ease: "expo.inOut" })
    .to(".scroll-arrow .fa-solid, .scroll-arrow span", { duration: 1, opacity: 1, ease: "ease.Out" })
    .to(".scroll-arrow .fa-solid, .scroll-arrow span", { duration: 1, y: 20, opacity: 1, repeat: -1, yoyo: true, ease: "ease-out" }, "<");


// about us title fade stagger

let aboutus = gsap.timeline({
    scrollTrigger: {
        trigger: ".secondary-heading.animated",
        start: "top 70%",
        end: "=+200 bottom",
        toggleActions: "play none none reverse"
    },
    defaults: {
        ease: "power1.inOut"
    }
})

aboutus.to(".secondary-heading.animated span", {

        opacity: 1,
        stagger: { amount: 1 },


    })
    .from(".description.aboutus, .my-btn.about", {

        duration: 1,
        opacity: 0,
        y: 30,

    }, '<');

// business titles fade stagger

const businessItems = document.querySelectorAll(".item");

businessItems.forEach(function(item, index) {


    let business = gsap.timeline({
        scrollTrigger: {
            trigger: item.querySelector(".business-heading"),
            start: "top 70%",
            end: "=+200 bottom",
            toggleActions: "play none none reverse"
            // markers: true
        },
        defaults: { ease: "power1.inOut" }
    })

    business.to(item.querySelectorAll('.business-heading span'), {

            opacity: 1,
            stagger: { amount: 1 },
            ease: "power1.out"


        })
        .from(item.querySelector('.description.business'), {

            duration: 1,
            opacity: 0,
            x: -30



        }, '<')
        .from(item.querySelector('.my-btn.business'), {

            duration: 1,
            opacity: 0,
            x: -30
        }, '<');

});

// side-fixed business title animation
gsap.registerPlugin(ScrollTrigger);
gsap.to(".businessText", {
    duration: 0.5,
    opacity: 1,
    display: 'block',
    ease: "slowMo",
    right: 75,
    scrollTrigger: {
        trigger: ".triggerBusinessText",
        start: "top center",
        end: "top 200",
        endTrigger: ".endBusinessText",
        toggleActions: "play reverse restart reverse"
        // markers: true
    }
});

// business items
const items = document.querySelectorAll(".item");
items.forEach(function(item, index) {


    const tlBusiness = gsap.timeline({ defaults: { ease: 'slowMo.out' }, paused: true });
    tlBusiness.to(item.querySelector('.businessImageOverlay'), { duration: 0.35, opacity: 0 })
        .to(item.querySelector('.businessImage'), { duration: 5, scale: 1.1 }, '-=0.35');

    button = item.querySelector('.businessBtn');
    button.addEventListener("mouseenter", () => {

        tlBusiness.timeScale(1);
        tlBusiness.play();
    });
    button.addEventListener("mouseleave", () => {

        tlBusiness.timeScale(5);
        tlBusiness.reverse();
    });
});


// mission vision

let mvSection = gsap.timeline({
    scrollTrigger: {
        trigger: ".mv-section-heading",
        start: "top 70%",
        end: "=+200 bottom",
        toggleActions: "play none none reverse"
    },
    defaults: {
        ease: "power1.inOut"
    }
})

mvSection.to(".mv-section-heading span", {

        opacity: 1,
        stagger: { amount: 1.2 },


    })
    .from(".mv-card", { duration: 2, y: 35, opacity: 0, stagger: 0.2 }, "-=1.1");

gsap.from(".footer-box", {
    duration: 2.5,
    opacity: 0,
    scale: 0.9,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".footer-box",
        start: "-200px 70%",
        end: "bottom bottom",
        toggleActions: "play none none reset",
        markers: true
    }
});