//Rediret the user to a certain link
function button_redirect(link){
  window.open(link, "", "");
}

//==============================HANDLE ANIMATIONS==============================

//TODO: Add more animations

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const slide_in_left = entry.target.querySelector('.slide_in_left_object');
    const slide_in_right = entry.target.querySelector('.slide_in_right_object');
    if (entry.isIntersecting) {
      if (slide_in_left != null) {
        slide_in_left.classList.add('slide_in_left');
      } else if (slide_in_right != null) {
        slide_in_right.classList.add('slide_in_right');
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