import { useState } from "react";

export default function useMovieForm(defaultValue, validationFn = () => true) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [didTouch, setDidTouch] = useState(false);

  const InputValueIsValid = validationFn(inputValue);

  function reset() {
    setInputValue(defaultValue);
    setDidTouch(false);
  }

  function handleInputBlur() {
    setDidTouch(true);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    setDidTouch(false);
  }

  return {
    value: inputValue,
    handleInputBlur,
    handleInputChange,
    hasError: didTouch && !InputValueIsValid,
    setDidTouch,
    reset,
  };
}
