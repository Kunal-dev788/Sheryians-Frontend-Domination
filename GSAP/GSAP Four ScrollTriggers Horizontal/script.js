gsap.to("#page2 h1",{
    transform: "translateX(-125%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        makers: true,
        start: "top 0%",
        end: "top -105%",
        scrub: 5,
        pin: true
    }
})