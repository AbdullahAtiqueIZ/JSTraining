var message = $('#message-div');
function verifyStrongPassword(input) {
  let value = input.value;
  let pattern = /[A-Za-z0-9]\w{7,}/;
  try {
    if (pattern.test(value)) {
      alert("Valid password");
    } else {
      throw "Invalid password";
    }
  } catch (err) {
    event.preventDefault();
    message.text(err);
  }
}