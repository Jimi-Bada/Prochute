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


const modal  = document.querySelector('.modal');
const closeModalIcon = document.querySelector(".bi-x-lg");



closeModalIcon.addEventListener('click',()=>{
    modal.closeModal();

})