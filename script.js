(function () {
  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('navLinks');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Contact form (Web3Forms)
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (!form || !status) return;

  function setStatus(msg, cls) {
    status.textContent = msg;
    status.className = cls || '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var key = form.elements['access_key'].value;
    if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus('Form abhi set up nahi hua. Please email se sampark karein.', 'err');
      return;
    }
    if (form.elements['botcheck'].checked) return;

    if (!form.elements['name'].value.trim() ||
        !form.elements['message'].value.trim() ||
        !form.elements['email'].validity.valid ||
        !form.elements['email'].value.trim()) {
      setStatus('Please naam, sahi email aur message bharein.', 'err');
      return;
    }

    setStatus('Bhej raha hoon...');
    var submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data && data.success) {
          form.reset();
          setStatus('Message bhej diya gaya. Dhanyavaad!', 'ok');
        } else {
          setStatus('Message nahi gaya. Please email try karein.', 'err');
        }
      })
      .catch(function () {
        setStatus('Network error. Please baad mein try karein.', 'err');
      })
      .finally(function () { submit.disabled = false; });
  });
})();
