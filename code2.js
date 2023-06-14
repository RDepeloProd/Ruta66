/* GSAP */

gsap.registerPlugin(ScrollTrigger);


function roadUno(){
    document.getElementById("uno").style.opacity=1;
}
function roadDos(){
    document.getElementById("dos").style.opacity=1;
}
function roadTres(){
    document.getElementById("tres").style.opacity=1;
}
function roadCuatro(){
    document.getElementById("cuatro").style.opacity=1;
}
function roadCinco(){
    document.getElementById("cinco").style.opacity=1;
}
function roadSeis(){
    document.getElementById("seis").style.opacity=1;
}


gsap.from(".dTitulo",{
    scrollTrigger:{
        trigger: "#detalles",
        scrub:true,
        markers:false,
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
        markers:false,
        start:"top-=50 center",
        end:"bottom-=750 center",
    },
    x:800,
    opacity:0,
});

gsap.from(".population",{
    scrollTrigger:{
    trigger: ".population",
    markers:false,
    scrub:true,
    start:"top+=200 center",
    end:"bottom-=400 center",
},
y:-400,
opacity:0
})

gsap.from(".foto img",{
    scrollTrigger:{
    trigger: ".foto",
    markers:false,
    scrub:true,
    start:"top+=200 center",
    end:"bottom-=400 center",
},
x:-400,
opacity:0
})

gsap.from(".foto h1",{
    scrollTrigger:{
    trigger: ".foto",
    markers:false,
    scrub:true,
    start:"top+=200 center",
    end:"bottom-=400 center",
},
x:400,
opacity:0
})

gsap.from(".needles",{
    scrollTrigger:{
    trigger: ".publi",
    markers:false,
    scrub:true,
    start:"top+=100 center",
    end:"bottom-=1400 center",
},
x:-400,
opacity:0,
onUpdate: roadUno
})

gsap.from(".calico",{
    scrollTrigger:{
    trigger: ".calico",
    markers:false,
    scrub:true,
    start:"top+=100 center",
    end:"bottom-=1300 center",
},
x:-400,
opacity:0,
onUpdate: roadDos
})

gsap.from(".bottle",{
    scrollTrigger:{
    trigger: ".bottle",
    markers:false,
    scrub:true,
    start:"top+=200 center",
    end:"bottom-=1250 center",
},
x:-400,
opacity:0,
onUpdate: roadTres
})

gsap.from(".wigman",{
    scrollTrigger:{
    trigger: ".wigman",
    markers:false,
    scrub:true,
    start:"top+=200 center",
    end:"bottom-=1400 center",
},
x:-400,
opacity:0,
onUpdate: roadCuatro
})

gsap.from(".la",{
    scrollTrigger:{
    trigger: ".la",
    markers:false,
    scrub:true,
    start:"top+=200 center",
    end:"bottom-=1950 center",
},
x:-400,
opacity:0,
onUpdate: roadCinco
})

