const validEmailPattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export function isEmail(value) {
  return value.trim() !== "" && validEmailPattern.test(value)
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function isBetween(value,min,max){
  return value>=min && value<=max
}