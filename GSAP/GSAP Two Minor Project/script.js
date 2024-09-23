var tl = gsap.timeline();

tl.from("#nav h4",{
    y: -50,
    opacity: 0,
    delay: 0.3,
    duration: 1,
    stagger: 0.3
})

tl.from("#main h1",{
    x: -500,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})

tl.from("#main img",{
    x: 100,
    rotate: 45,
    duration: 1,
    opacity: 0,
    stagger: 0.7
})
