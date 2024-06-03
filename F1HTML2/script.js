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
      info: 'Wins: 1 <br> Poles: 1 <br> Championships: 0',
      img: 'img/mclarenlogo.jpg'
    },
    ferrari: {
      title: 'INFO ABOUT FERRARI',
      subtitle: 'Ferarri 1950',
      info: 'Wins: 17 <br> Pole positions: 23  <br> Championships: 0',
      img: 'img/ferrarilogo.jpg'
    },
    mercedes: {
      title: 'INFO ABOUT MERCEDES',
      subtitle: 'Mercedes 1970',
      info: 'Wins: 111 <br> Pole positions: 118 <br> Championships: 8 (WCC) 7 (WDC)',
      img: 'img/merclogo.jpg'
    },
    redbull: {
      title: 'INFO ABOUT REDBULL',
      subtitle: 'Redbull 2005',
      info: 'Wins: 28 <br> Pole positions: 17 <br> Championships: 1 (WDC)',
      img: 'img/rblogo.jpg'
    },
    lotus: {
      title: 'INFO ABOUT LOTUS',
      subtitle: 'Lotus/Renault 1963',
      info: 'Wins: 0 <br> Poles: 0 <br> Podiums: 0',
      img: 'img/lotuslogo.jpg'
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
