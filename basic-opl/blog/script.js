const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click',function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
   if(menuToggle.classList.contains('active')){
       menuToggle.innerHTML ='<i class="fas fa-times"> </i>'
   }else{
    menuToggle.innerHTML ='<i class="fas fa-bars"> </i>'

   }
});