const change_header_type = function(){
  const for_desktop_elements = window.document.getElementsByClassName("for_desktop"); 
  const for_mobile_elements = window.document.getElementsByClassName("for_mobile"); 
  if (window.innerWidth < 852){
    for (let i = 0; i<for_mobile_elements.length;i++){
      for_mobile_elements[i].style.display = "block";
    };
    for (let i = 0; i<for_desktop_elements.length;i++){
      for_desktop_elements[i].style.display = "none";
    }; 
  }
  else {
    for (let i = 0; i<for_mobile_elements.length;i++){
      for_mobile_elements[i].style.display = "none";
    };
    for (let i = 0; i<for_desktop_elements.length;i++){
      for_desktop_elements[i].style.display = "block";
    }
  }
};

window.onload = function(){
  change_header_type();
};

window.onresize = function(){
  change_header_type();
};

//Rediret the user to a certain link
function button_redirect(link){
  window.open(link, "", "");
}


//TODO: Add more animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const slide_in_left = entry.target.querySelector('.slide_in_left_object');
    console.log(slide_in_left);
    if (entry.isIntersecting) {
      slide_in_left.classList.add('slide_in_left');
	  return; 
    }

    //Uncomment line below to have object slide in once again after scrolling back
    //slide_in_left.classList.remove('slide_in_left'); 
  });
});

animated_objects = document.querySelectorAll('.animation_wrapper');

animated_objects.forEach((element) => observer.observe(element));