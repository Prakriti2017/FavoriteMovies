const isValidEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function isEmail(value) {
  return value.trim() !== "" && value.match(isValidEmail);
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}
