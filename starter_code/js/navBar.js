window.addEventListener("scroll", (event => {
  const scroll = this.scrollY;
  const nav = document.getElementById('mainNav');

  if(scroll > 100){
    nav.style.height = '60px';
  } else if (scroll < 100) {
    nav.style.height = '80px';
  }
}))


