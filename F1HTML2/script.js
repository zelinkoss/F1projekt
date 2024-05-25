document.addEventListener('DOMContentLoaded', (event) => {
  // Hover effects for elements with the class 'person'
  document.querySelectorAll('.person').forEach(person => {
    person.addEventListener('mouseenter', function() {
      this.querySelector('.details').style.display = 'block';
    });

    person.addEventListener('mouseleave', function() {
      this.querySelector('.details').style.display = 'none';
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Modal and team data handling
  const teamData = {
    mclaren: {
      title: 'INFO ABOUT MCLAREN',
      subtitle: 'McLaren 1963',
      info: 'Wins: 3 <br> Poles: 4 <br> Podiums: 5',
      img: 'img/mclarenlogo.jpg'
    },
    ferrari: {
      title: 'INFO ABOUT FERRARI',
      subtitle: 'Ferarri 1950',
      info: 'Wins: 3 <br> Poles: 4 <br> Podiums: 5',
      img: 'path/to/ferrari.jpg'
    },
    mercedes: {
      title: 'INFO ABOUT MERCEDES',
      subtitle: 'Mercedes 1970',
      info: 'Wins: 3 <br> Poles: 4 <br> Podiums: 5',
      img: 'path/to/mercedes.jpg'
    },
    redbull: {
      title: 'INFO ABOUT REDBULL',
      subtitle: 'Redbull 2005',
      info: 'Wins: 3 <br> Poles: 4 <br> Podiums: 5',
      img: 'path/to/redbull.jpg'
    },
    lotus: {
      title: 'INFO ABOUT LOTUS',
      subtitle: 'Lotus/Renault 1963',
      info: 'Wins: 3 <br> Poles: 4 <br> Podiums: 5',
      img: 'path/to/lotus.jpg'
    }
  };

  const modal = document.getElementById('teamModal');
  const teamInfo = document.getElementById('teamInfo');
  const span = document.getElementsByClassName('close')[0];

  document.querySelectorAll('.color').forEach((item) => {
    item.addEventListener('click', (event) => {
      const team = event.currentTarget.getAttribute('data-team');
      const teamDetails = teamData[team];
      teamInfo.innerHTML = `
        <img src="${teamDetails.img}" alt="${team}">
        <div>
          <h1>${teamDetails.title}</h1>
          <h2>${teamDetails.subtitle}</h2>
          <p>${teamDetails.info}</p>
        </div>
      `;
      modal.style.display = 'block';
    });
  });

  span.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
