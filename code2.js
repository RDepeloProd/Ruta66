/* GSAP */

gsap.registerPlugin(ScrollTrigger);

gsap.from(".dTitulo",{
    scrollTrigger:{
        trigger: "#detalles",
        scrub:true,
        start:"top-=100 center",
        end:"bottom-=800 center",
    },
    x:-800,
    opacity:0
});
gsap.from(".dTexto",{
    scrollTrigger:{
        trigger: "#detalles",
        scrub:true,
        start:"top-=50 center",
        end:"bottom-=750 center",
    },
    x:800,
    opacity:0,
});

gsap.from(".population",{
    scrollTrigger:{
    trigger: ".population",
    scrub:true,
    start:"top+=200 center",
    end:"bottom-=400 center",
},
y:-400,
opacity:0
})