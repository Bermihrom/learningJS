function fun1 (){
    const sel = document.getElementById("mySelect").selectedIndex;
    const options = document.getElementById("mySelect").options;
    alert("You have chosen the option of "+ options[sel].text);
}
function fun2 (){
    let range = document.getElementById("r1");
    let p = document.getElementById("one");
    let div = document.getElementById("test");
    div.style.width = range.value+"px";
    p.innerHTML = range.value;
}

document.getElementById("nav").onmouseover = function (event){
    const target = event.target;
    if(target.className == "menu-item"){
        let s = target.getElementsByClassName("submenu");
        closeMenu();
        s[0].style.display = "block";
    }
}

document.onmouseover = function(event){
    let target = event.target;
    // console.log(event.target);
    if (target.className != "menu-item" && target.className != "submenu"){
        closeMenu();
    }
}

function closeMenu (){
    const menu = document.getElementById("nav");
    const subm = document.getElementsByClassName("submenu");
    for( i = 0; i < subm.length; i++){
        subm[i].style.display = "none";
    }
}

let tab;
let tabContent;
window.onload = function (){
    tabContent = document.getElementsByClassName("tabContent");
    tab = document.getElementsByClassName("tab");
    hideTabsContent(1);
}
function hideTabsContent(a){
    for(let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        tab[i].classList.remove("whiteborder");
    }
}
document.getElementById("tabs").onclick = function(event){
    let target = event.target;
    if(target.className == "tab"){
        for(let i = 0; i < tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i)
                break;
            }
        }
    }
}

function showTabsContent(b){
    if(tabContent[b].classList.contains("hide")){
        hideTabsContent(0);
        tab[b].classList.add("whiteborder");
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
}


const module = document.getElementById("myModule");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function (){
    module.style.display = "block";
}
span.onclick = function (){
    module.style.display = "none";
}

window.onclick = function (event){
    if(event.target == module){
        module.style.display = "none";
    }
}

function myMove (){
    let elem = document.getElementById("myAnimation");
    let position = 0;
    let id = setInterval(frame, 5);
    function frame(){
        if(position == 350){
            clearInterval(id);
        }else{
            position++
            elem.style.top = position + "px";
            elem.style.left = position + "px";
        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function test(){
    alert('555555555555');
    console.log("test = ");
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "activate";
}

function myFunction(){
    let input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName("li");

    for(i = 0 ; i < li.length ; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}


function plus(){
    let n1 = document.getElementById("n1").value;
    n1 = parseInt(n1);
    let n2 = document.getElementById("n2").value;
    n2 = parseInt(n2);
    let result = document.getElementById("out");
    result = n1 + n2;
    document.getElementById("out").innerHTML = result;
}
function minus(){
    let n1 = document.getElementById("n1").value;
    n1 = parseInt(n1);
    let n2 = document.getElementById("n2").value;
    n2 = parseInt(n2);
    let result = document.getElementById("out");
    result = n1 - n2;
    document.getElementById("out").innerHTML = result;
}
function mult(){
    let n1 = document.getElementById("n1").value;
    n1 = parseInt(n1);
    let n2 = document.getElementById("n2").value;
    n2 = parseInt(n2);
    let result = document.getElementById("out");
    result = n1 * n2;
    document.getElementById("out").innerHTML = result;
}
function increase(){
    let n1 = document.getElementById("n1").value;
    n1 = parseInt(n1);
    let n2 = document.getElementById("n2").value;
    n2 = parseInt(n2);
    let result = document.getElementById("out");
    result = n1 / n2;
    document.getElementById("out").innerHTML = result;
}
function cash(){
    let n1 = document.getElementById("n1").value;
    n1 = parseInt(n1);
    let n2 = document.getElementById("n2").value;
    n2 = parseInt(n2);
    let result = document.getElementById("out");
    result = n1 % n2;
    document.getElementById("out").innerHTML = result;
}

const myModal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");


img.onclick = function(){
    myModal.style.display="block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

const closer = document.getElementsByClassName("closer")[0];

closer.onclick = function (){
    myModal.style.display = "none";
}

function move(){
    const elem = document.getElementById("myBar");
    let width = 10;
    const id = setInterval(progressFrame, 10);
    function progressFrame(){
        if(width >= 100){
            clearInterval(id);
        }else{
            width++;
            elem.style.width = width + "%";
            document.getElementById("label").innerHTML = width*1 + "%";
        }
    }
}


// ===============================================

const accordion = document.getElementsByClassName("accordion");
let j;
for(j = 0;j < accordion.length;j++){
    accordion[j].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

function moneyConverter(valNum){

    const course = document.getElementById("inputcourse").value;
    console.log("valNum = ", valNum);
    console.log("course = ",  course);
    document.getElementById("outputgryv").innerHTML = valNum * course;
}

function toggleBtn(){
    const u = document.getElementById("myToggleDiv");
    if(u.style.display === "none"){
        u.style.display = "block";
    }else{
        u.style.display = "none";
    }
}

const closeBtn = document.getElementsByClassName("closebtn");
for(i=0; i<closeBtn.length; i++){
    console.log("i = ", i);
    closeBtn[i].onclick = function(){
        let div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){
            div.style.display = "none";
        }, 600)
    }
}

const screen = window.innerWidth;
console.log("screen = ", screen);
if(matchMedia){
    let us_screen = window.matchMedia("(max-width: 768px)")
    us_screen.addListener(changes);
    changes(us_screen);
}
function changes(us_screen){
    let message = (us_screen.matches ? "less" : "more") + " than 768px";
    document.getElementById("now").firstChild.nodeValue = message;
}