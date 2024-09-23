gsap.to("#page2 img",{
    width: "100%",
    scrollTrigger : {
        trigger: "#page2",
        scroll: "body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})

// matlab scroll tab start hoga jab mera scroll-start trigger hoga or wo kab trigger hoga jav page2 top 0 par hoga matlab page1 pura scroll ho gaya and jaisa hi page 2 start hua mera effect start ho gaya and yah effect tab end hoga jab scroll-end -100 top position pe nahi chala jata means scroll-end screen width ke bhar -100% (means page1 ke top tak nahi poch jata) 