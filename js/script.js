 //index
 const title_car = document.querySelector('.title_car');
 const define_title = document.querySelectorAll('h2.define-title')
 const bnt_1 = document.querySelector('.btn-1')
 const bnt_2 = document.querySelector('.inventory')
 const menu_models = document.querySelector('nav');
 const link_models = document.querySelectorAll('nav a');
 const banners = document.querySelectorAll('.banner');
 const subtext = document.querySelector('.subText')
 const span_subtext = document.querySelectorAll('.span-subtext')
 

//index.html
function scrollSnaping(){
        window.addEventListener('scroll',()=>{

            for (let i = 0; i < banners.length; i++) {
               if(banners[i].getBoundingClientRect().top == 0){
                 title_car.innerText = define_title[i].innerText
                 subtext.innerText = span_subtext[i].innerText
               }                   
            }

             if(banners[6].getBoundingClientRect().top == 0){
                bnt_1.innerText = 'Shop Now'
                bnt_2.style.setProperty('display','none')
            }else{
               bnt_1.innerText = 'Custom order'
               bnt_2.style.setProperty('display','inline-block')
               
            }

        })

}scrollSnaping();

 
//Menu Sidebar
function openMenu(){
   const menu_text = document.getElementById('menu-mobile')
   const aside = document.querySelector('aside')
   const sidebar = document.querySelector('.sidebar')
   const closeMenu = document.querySelector('.sidebar > img')
   const links = document.querySelectorAll('.sidebar ul li')
   const html = document.querySelector('html')


   menu_text.addEventListener('click',(e)=>{
     e.preventDefault()
       if(window.innerWidth >= 1000){
         for(let i = 0; i < 6; i++){
            links[i].style.display = 'none'
         }
       }else{
        for(let i = 0; i < 6; i++){
            links[i].style.display = 'block'
         }
       }
    
      aside.style.setProperty('display','block')
      setTimeout(()=>{
        aside.style.setProperty('opacity', '1')
        sidebar.style.setProperty('transform','translateX(0)')
      },10)
      html.style.overflowY = 'hidden'

   })

    closeMenu.addEventListener('click',()=>{
        aside.style.setProperty('opacity', '0')
        sidebar.style.setProperty('transform','translateX(100%)')
        setTimeout(()=>{
           aside.style.setProperty('display','none')
        },1000)
        html.style.overflowY = 'scroll'
     })

    aside.addEventListener('click',(e)=>{
        if(e.target == aside){
            aside.style.setProperty('opacity', '0')
            sidebar.style.setProperty('transform','translateX(100%)')
            setTimeout(()=>{
                aside.style.setProperty('display','none')
             },1000)
             
             html.style.overflowY = 'scroll'
         }
           
        
    })

 }openMenu()

  
