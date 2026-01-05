const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
};

document.querySelector('.visit-btn').addEventListener('click', () => {
  window.open('https://github.com/abhaysemwal745', '_blank');
});

const buttons = document.querySelectorAll('.btn-group .btn');

buttons.forEach(btn => {
  if (btn.innerText.includes('Download')) {
    btn.addEventListener('click', () => {
      window.open('Abhay_Semwal_CV.pdf', '_blank');
    });
  }

  if (btn.innerText.includes('Contact')) {
    btn.addEventListener('click', () => {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
  }
});

const socials = document.querySelectorAll('.socials i');

socials.forEach(icon => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-github')) {
      window.open('https://github.com/abhaysemwal745', '_blank');
    }
    if (icon.classList.contains('fa-linkedin')) {
      window.open('https://www.linkedin.com/in/abhay-semwal/', '_blank');
    }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  const title = card.querySelector('h3').innerText;

  const btns = card.querySelectorAll('.btn');
  btns.forEach(btn => {
    if (btn.innerText.includes('Live')) {
      btn.addEventListener('click', () => {
        if (title.includes('Decision')) {
          window.open('https://abhaysemwal745.github.io/decision-fatigue-simulator/', '_blank');
        }
      });
    }

    if (btn.innerText.includes('Github')) {
      btn.addEventListener('click', () => {
        if (title.includes('Decision')) {
          window.open('https://github.com/abhaysemwal745/decision-fatigue-simulator', '_blank');
        }
      });
    }
  });
});

document.getElementById('submit').addEventListener('click', () => {
  const emailInput = document.querySelector('.input input').value;

  if (!emailInput) {
    alert('Enter an email first.');
    return;
  }
 
  window.location.href = `mailto:${emailInput}`;
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const mailBtn = document.getElementById("mail-btn");

mailBtn.addEventListener("click", () => {
  const gmailUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=abhaysemwal745@gmail.com&su=Portfolio%20Contact";

  const win = window.open(gmailUrl, "_blank");

  if (!win || win.closed || typeof win.closed === "undefined") {
    window.location.href =
      "mailto:abhaysemwal745@gmail.com?subject=Portfolio%20Contact";
  }
});


