//Rediret the user to a certain link
function button_redirect(link){
  window.open(link, "", "");
}

//==============================HANDLE ANIMATIONS==============================

//TODO: Add more animations

var sleepSetTimeout_ctrl;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const slide_in_left_elements = entry.target.querySelectorAll('.slide_in_left_object');
    const slide_in_right_elements = entry.target.querySelectorAll('.slide_in_right_object');
    console.log(slide_in_left_elements);
    if (entry.isIntersecting) {
      for (let i = 0; i<slide_in_left_elements.length; i++) {
        if (slide_in_left_elements[i] != null) {
          slide_in_left_elements[i].classList.add('slide_in_left');
        }
      }
      for (let i = 0; i<slide_in_right_elements.length; i++) {
        if (slide_in_right_elements[i] != null) {
          slide_in_right_elements[i].classList.add('slide_in_right');
        }
      }
	  return; 
    }

    //Uncomment line below to have object slide in once again after scrolling back
    //slide_in_left.classList.remove('slide_in_left'); 
  });
});

animated_objects = document.querySelectorAll('.animation_wrapper');

animated_objects.forEach((element) => observer.observe(element));
//=============================================================================