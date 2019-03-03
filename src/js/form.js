(() => {
  const form = document.getElementById('js-submit-contact-form');
  const formResponse = document.getElementById('js-form-response');

  if (!form) return;

  // Toggles the button state between disabled and enabled
  // Uses data-label to reinstate the button label
  function toggleButtonState(button) {
    button.disabled = !button.disabled;
    button.innerHTML = button.disabled
      ? '<div class="loading-dots"></div>'
      : button.getAttribute('data-label');
  }

  form.onsubmit = e => {
    e.preventDefault();
    // Escape if the honeypot has been filled
    if (!!form.children.namedItem('honeypot').value) return;

    // Disable submissions, show loading
    const submitButton = e.target.querySelector('[type="submit"]');
    toggleButtonState(submitButton);

    // reset form response message
    formResponse.innerHTML = '';
    formResponse.classList.remove('_success', '_warning', '_slide-in', '_fade-out');

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
      toggleButtonState(submitButton);
      if (response.target.status === 200) {
        form.reset();
        formResponse.classList.add('_success', '_slide-in', '_fade-out');
        formResponse.innerHTML = "Thanks for the message. I'll be in touch shortly.";
      } else {
        formResponse.classList.add('_warning', '_slide-in');
        formResponse.innerHTML =
          'Something went wrong. Please try again, or <a href="mailto:bholtbholt@icloud.com">email me directly</a>.';
        console.error(JSON.parse(response.target.response).message);
      }
    };
  };
})();
