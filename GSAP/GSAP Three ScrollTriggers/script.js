gsap.from("#page1 .circle",{
    scale: 0,
    duration: 1,
    delay: 0.7,
    rotate: 360
})

gsap.from("#page2 .circle",{
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 .circle",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 2
    }
})

gsap.from("#page3 .circle",{
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page3 .circle",
        scroller: "body",
        scrub: 2
    }
})

// jab page scroll hoga tabi uss page ka animation chalega