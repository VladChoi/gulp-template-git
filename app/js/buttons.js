const buttons = document.querySelectorAll('.main-button')

buttons.forEach((button) => {
  button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>'
  console.log(buttons);
});

