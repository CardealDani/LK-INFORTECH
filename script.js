function tabMenu(){
const img = document.querySelectorAll(".js-lojaImg li")
const descricao = document.querySelectorAll(".js-lojaDescricao section")
descricao[0].classList.add('ativoDescricao')

function addClassImg(index){
    img.forEach((li)=>{
        li.classList.remove('ativoImg')
    })
    img[index].classList.add('ativoImg')
}
img.forEach((item,indice)=>{
    item.addEventListener('click',()=>{
        addClassImg(indice);
    })
})


function addClassDescricao(index){
    descricao.forEach((section) =>{
        section.classList.remove('ativoDescricao')
    })
    descricao[index].classList.add('ativoDescricao')
}

img.forEach((item,indice)=>{
    item.addEventListener('click',()=>{
        addClassDescricao(indice);
    })
})
}
tabMenu();
faqList();
scrollSuave();

function faqList(){
const faq = document.querySelectorAll(".js-faq dt")

faq[0].classList.add('ativo')
faq[0].nextElementSibling.classList.add('ativo')


faq.forEach((item)=>{
    item.addEventListener('click', activeFaq)
})
function activeFaq(){
    this.classList.toggle('ativo')
   this.nextElementSibling.classList.toggle('ativo')
}}
 
function scrollSuave(){
    const menu = document.querySelectorAll('.js-menu a[href^="#"]')
    menu.forEach((item)=>{
        item.addEventListener('click',callbackScroll)
    })
    function callbackScroll(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section=document.querySelector(href)
        console.log(href)
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}


const animateScroll = document.querySelectorAll('.js-scrollAnimation')

function callBackAnimaScroll(){
    animateScroll.forEach((item)=>{
        const itemTopo= item.getBoundingClientRect().top
        if(itemTopo<0){
            item.classList.add('ativoScroll')
        }
        else {
            item.classList.remove('ativoScroll')
        }
    })
}
window.addEventListener('scroll',callBackAnimaScroll)