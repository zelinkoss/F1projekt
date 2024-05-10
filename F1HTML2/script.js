document.querySelectorAll('.person').forEach(person => {
    person.addEventListener('mouseenter', function() {
      this.querySelector('.details').style.display = 'block';
    });

    person.addEventListener('mouseleave', function() {
      this.querySelector('.details').style.display = 'none';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });