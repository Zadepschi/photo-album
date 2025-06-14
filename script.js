 const rocket = document.getElementById("rocket");
  let launched = false;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;

    // Если прокрутка достигла нижней части страницы и ракета еще не запускалась
    if (!launched && scrollTop + windowHeight >= docHeight - 10) {
      launched = true;

      // Показать ракету
      rocket.style.opacity = "1";
      rocket.style.bottom = "30px";

      // Запустить анимацию через короткую задержку
      setTimeout(() => {
        rocket.classList.add("animate");
      }, 300);

      // Скрыть ракету после анимации
      setTimeout(() => {
        rocket.style.display = "none";
      }, 4000);
    }
  });





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}