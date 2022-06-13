// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    if(pin == '0000' || pin == '000000') return true;
    return (pin.length == 4 || pin.length == 6) && pin.match(/[0-9]/ig).length === pin.length ? !!(Number(pin)) : false;
  }

console.log(validatePIN("0000"));


function validatePIN2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}