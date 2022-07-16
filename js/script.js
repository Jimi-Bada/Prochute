;
// console.log(select);

// function resize() {
//     let differentCategories = document.querySelectorAll('#Categories');
//     // differentCategories={};
//     // console.log(differentCategories);
//     console.log( differentCategories.every((element, index) => { /* ... */ } ));
   
//     let select = document.getElementById('options').innerHTML;
//     select.style.width =differentCategories.length*100+'px'; 
//     console.log(select);
// }
// resize();


// const modal  = document.querySelector('.modal');
// const closeModalIcon = document.querySelector(".bi-x-lg");



// closeModalIcon.addEventListener('click',()=>{
//     modal.closeModal();

// })
// const navbarToggler = document.querySelector(".navbar-toggler");
// console.log(navbarToggler.addEventListener("click", () => {
//     navbarToggler.style.border = "none!important"    
//     }));


const chevron = document.querySelector('.phone-nav-chevron');
const dropdown = document.querySelector('.dropdown');
console.log(chevron);

function toggleDropdown(){
    chevron.classList.toggle('bi-chevron-compact-up')
   console.log(dropdown.classList.toggle('d-table')) ;
    
}