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
//get Course Information
function getCourseInfo(course){
    const courseInfo = {
      image : course.querySelector('img').src,
      title : course.querySelector('h4').textContent,
      price : course.querySelector('.price span').textContent,
      id    : course.querySelector('a').getAttribute('data-id')
    }
 

    addToCart(courseInfo);
    coursesList.push(courseInfo);
    addCourseToLocalStorage();
 }
 function addToCart(courseInfo){
	

    const row = document.createElement('tr');
    //create an image element
    image     = document.createElement('img');
    image.src = courseInfo.image;
    image.style.width = '100px';
    //append element to row (parent)
    row.appendChild(addToTd(image,1));
    row.appendChild(addToTd(courseInfo.title,0));
    row.appendChild(addToTd(courseInfo.price,0));
    //create anchor for delete button
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.setAttribute('data-id',courseInfo.id);
    anchor.textContent = 'X';
    anchor.classList = 'remove';
  

    row.appendChild(addToTd(anchor,1));
    //append to Shooping case
    shoppingCartContent.appendChild(row);
  }
  
