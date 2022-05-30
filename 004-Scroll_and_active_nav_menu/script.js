let section = document.querySelectorAll('section');
let header = document.querySelector('header');
let navlinks = document.querySelectorAll('header ul li a');


window.onscroll = () =>{

   var sc = window.scrollY;
   if(sc >= 100){
      header.classList.add('active');
   }else{
      header.classList.remove('active');
   }

   section.forEach(sec =>{
      let top = window.scrollY;//scroll korle screen koto tuku top a hide hoye jay ata mark kora
      let offset = sec.offsetTop; //current scren bade height dhora hoy & akta section onno akta section ar sathe + kora  hoy
      let height = sec.offsetHeight; // akhane protiti section ar height alada alada dhora hoy
      let id = sec.getAttribute('id');
                
      console.log(top);
      console.log(offset);
      console.log(height);
      console.log(id);
 
      if(top >= offset && top < offset + height){
         navlinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
         })
      }
   })
}