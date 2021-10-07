/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav_link, we remove show menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills_content'),
        skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className;
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className='skills_content skills_close';
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el)=>{
    console.log(el)
    el.addEventListener('click',toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification_active');
        })

        target.classList.add('qualification_active');
        tab.forEach(tab=>{
            tab.classList.remove('qualification_active');
        })
        tab.classList.add('qualification_active');
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
        modalBtns = document.querySelectorAll('.services_button'),
        modalCloses = document.querySelectorAll('.services_modal-close');
        

console.log(`${modalViews.length}${modalBtns.length }${ modalCloses.length}`);
let modal = function(modalClick){

     modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, index)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(index);
    })
})

modalCloses.forEach((modalClose,index)=>{
    modalClose.addEventListener('click',()=>{
        modalViews[index].classList.remove('active-modal');
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new swiper('.portfolio_container',{
    cssMode: true,
    navigation:{
        nexEl:'.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 