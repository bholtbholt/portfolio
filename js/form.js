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

  function isSpam(text) {
    const randomStringPattern = /^[A-Za-z]{5,}$/;
    return randomStringPattern.test(text);
  }

  form.onsubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {};
    const formElements = Array.from(form);
    formElements.map((input) => (data[input.name] = input.value));

    // Disable submissions, show loading
    const submitButton = form.querySelector('[type="submit"]');
    toggleButtonState(submitButton);

    // Reject spam messages which are usually single words
    if (isSpam(data.name) && isSpam(data.message)) return;

    // reset form response message
    formResponse.innerHTML = '';
    formResponse.classList.remove('_success', '_warning', '_slide-in', '_fade-out');

    try {
      // Send the collected data as JSON
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          Accept: 'application/json; charset=utf-8',
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      });

      toggleButtonState(submitButton);

      if (response.ok) {
        form.reset();
        formResponse.classList.add('_success', '_slide-in', '_fade-out');
        formResponse.innerHTML = "Thanks for the message. I'll be in touch shortly.";
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      toggleButtonState(submitButton);
      formResponse.classList.add('_warning', '_slide-in');
      formResponse.innerHTML =
        'Something went wrong. Please try again, or <a href="mailto:bholtbholt@icloud.com">email me directly</a>.';
      console.error(error);
    }
  };
})();
