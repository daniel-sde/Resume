var tl = gsap.timeline();

tl.from(".navitem", {
    stagger: 0.3,
    duration: 2,
    y: 20,
    delay: 6,
    ease: "Expo.easeInOut",
    opacity: 0,
})
    .from(
        "#smline",
        {
            width: 0,
            duration: 1,
            ease: "Expo.easeInOut",
        },
        "-=2"
    )
    .from(
        ".leftitem",
        {
            stagger: 0.3,
            duration: 2,
            y: 20,
            ease: "Expo.easeInOut",
            opacity: 0,
        },
        "-=2"
    )
    .from("#right img", {
        rotation: 0,
        scale: 0.8,
        duration:.8,
        ease: "Expo.easeInOut",
        opacity: 0,
    })
    .to("#right img", {
        rotation: 360,
        scale: 0.7,
        duration: 1.5,
        transformOrigin: "55% 55%",
        opacity: 1,
        ease: "Expo.ScaleEase",
    });
