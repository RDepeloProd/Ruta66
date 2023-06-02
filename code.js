function irEstado(){
    document.getElementById("post").style.zIndex=1;
    document.getElementById("road").style.zIndex=0;
    document.getElementById("post").style.opacity=1;
   // document.getElementById("post").style.height="800vh"
}
function volverRoad(){
    document.getElementById("post").style.zIndex=0;
    document.getElementById("road").style.zIndex=1;
    document.getElementById("post").style.opacity=0;
   // document.getElementById("post").style.height="100vh"
}

function adelgazarLetra(){
    document.getElementById("il").style.fontWeight= 100
    document.getElementById("mo").style.fontWeight= 100
    document.getElementById("ks").style.fontWeight= 100
    document.getElementById("ok").style.fontWeight= 100
    document.getElementById("tx").style.fontWeight= 100
    document.getElementById("nm").style.fontWeight= 100
    document.getElementById("az").style.fontWeight= 100
    document.getElementById("ca").style.fontWeight= 100
}

//window.onload=document.getElementById("post").style.height="100vh";

var tituloState= document.getElementById("nameEstado");
var fondo = document.getElementById("road");
var descri = document.getElementById("text");

function illinois(){
    tituloState.innerHTML = 'Illinois, ILL';
    descri.innerHTML= "En Illinois, la Ruta 66 comienza en Chicago y atraviesa ciudades históricas como Joliet y Springfield, ofreciendo una mezcla de paisajes urbanos y rurales."
    fondo.style.backgroundColor = "#4DD19F"
    adelgazarLetra()
    document.getElementById("il").style.fontWeight= 700
}
function misuri(){
    tituloState.innerHTML = "Missouri, MO"
    descri.innerHTML= "En Missouri, la Ruta 66 pasa por St. Louis y Springfield, con impresionantes vistas del río Misisipi y atracciones como el Gateway Arch y el Museo de Historia de la Ruta 66."
    fondo.style.backgroundColor = "#74D09F"
    adelgazarLetra()
    document.getElementById("mo").style.fontWeight= 700
}
function kansas(){
    tituloState.innerHTML = "Kansas, KS"
    descri.innerHTML= " El tramo de Kansas es corto pero pintoresco, con pequeñas ciudades y praderas que representan el paisaje de la América rural."
    fondo.style.backgroundColor = "#7FBD80"
    adelgazarLetra()
    document.getElementById("ks").style.fontWeight= 700
}
function okla(){
    tituloState.innerHTML = "Oklahoma, OK"
    descri.innerHTML= "Oklahoma se destaca por sus extensas llanuras y ciudades como Tulsa y Oklahoma City, donde puedes explorar museos y monumentos relacionados con la Ruta 66."
    fondo.style.backgroundColor = "#BFBC69"
    adelgazarLetra()
    document.getElementById("ok").style.fontWeight= 700
}
function texas(){
    tituloState.innerHTML = "Texas, TX"
    descri.innerHTML= "En Texas, la Ruta 66 atraviesa el Panhandle, ofreciendo paisajes desérticos y atracciones como el Cadillac Ranch y el MidPoint Café en Adrian."
    fondo.style.backgroundColor = "#FBD294"
    adelgazarLetra()
    document.getElementById("tx").style.fontWeight= 700
}
function newMexico(){
    tituloState.innerHTML = "New Mexico, NM"
    descri.innerHTML= " Nuevo México ofrece una hermosa combinación de paisajes desérticos y montañosos, con paradas notables en Albuquerque, Santa Fe y el famoso pueblo de Gallup."
    fondo.style.backgroundColor = "#F9C5A8"
    adelgazarLetra()
    document.getElementById("nm").style.fontWeight= 700
}
function arizona(){
    tituloState.innerHTML = "Arizona, AZ"
    descri.innerHTML= " En Arizona, puedes disfrutar del Gran Cañón, el pintoresco pueblo de Seligman y los paisajes desérticos que rodean Flagstaff y Kingman."
    fondo.style.backgroundColor = "#FCDAB1"
    adelgazarLetra()
    document.getElementById("az").style.fontWeight= 700
}
function cali(){
    tituloState.innerHTML = "California, CA"
    descri.innerHTML= " El último estado en la ruta, California, cuenta con destinos emblemáticos como Barstow, San Bernardino y, finalmente, Santa Mónica, donde la Ruta 66 llega a su fin en las hermosas playas del Pacífico."
    fondo.style.backgroundColor = "#FCDAB1"
    adelgazarLetra()
    document.getElementById("ca").style.fontWeight= 700
}


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

var tl = gsap.timeline();
tl.from("#state",{scrollTrigger:{trigger:"#road", scrub:true,markers:false, start:"top+=10% center",end:"top+=15% center"},
onUpdate: illinois})
tl.from("#state",{scrollTrigger:{trigger:"#road", scrub:true,markers:false, start:"top+=20% center",end:"top+=30% center"},
onUpdate: misuri})
tl.from("#state",{scrollTrigger:{trigger:"#road", scrub:true,markers:false, start:"top+=30% center",end:"top+=40% center"},
onUpdate: kansas})
tl.from("#state",{scrollTrigger:{trigger:"#road", scrub:true,markers:false, start:"top+=40% center",end:"top+=50% center"},
onUpdate: okla})
tl.from("#state",{scrollTrigger:{trigger:"#road", scrub:true,markers:false, start:"top+=50% center",end:"top+=60% center"},
onUpdate: texas})
tl.from("#state",{scrollTrigger:{trigger:"#road", scrub:true,markers:false, start:"top+=60% center",end:"top+=70% center"},
onUpdate: newMexico})
tl.from("#state",{scrollTrigger:{trigger:"#road", scrub:true,markers:false, start:"top+=70% center",end:"top+=80% center"},
onUpdate: arizona})
tl.from("#state",{scrollTrigger:{trigger:"#road", scrub:true,markers:false, start:"top+=80% center",end:"top+=90% center"},
onUpdate: cali})








