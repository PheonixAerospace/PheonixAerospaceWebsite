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

