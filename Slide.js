var intervalo = 4000;

function slide1(){
    document.getElementById("bannerslide").src = "Imagens/banner1.jpg";
    setTimeout("slide2()", intervalo);
}
function slide2(){
    document.getElementById("bannerslide").src = "Imagens/banner2.jpg";
    setTimeout("slide3()", intervalo);
}
function slide3(){
    document.getElementById("bannerslide").src = "Imagens/banner3.jpg";
    setTimeout("slide4()", intervalo);
}
function slide4(){
    document.getElementById("bannerslide").src = "Imagens/banner4.jpg";
    setTimeout("slide1()", intervalo);
}
