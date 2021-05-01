//Variables
const courses = document.querySelector('#courses-list'),
shoppingCartContent = document.querySelector('#cart-content tbody'),
clearCartBtn        = document.querySelector("#clear-cart");
var coursesList         = [];


//Listener
loadEventListeners();
//Load course from localStorage if course avaible
getCoursesFromLocalStorage();


function loadEventListeners(){
courses.addEventListener('click',buyCourse);
shoppingCartContent.addEventListener('click',removeCourse);
clearCartBtn.addEventListener('click',clearCart);
}






//function


function buyCourse(e){
e.preventDefault();


if (e.target.classList.contains("add-to-cart")){
 const course = e.target.parentElement.parentElement;
 getCourseInfo(course);
}
}
