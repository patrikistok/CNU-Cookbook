import { InputGroup, InputGroupText, Input } from 'reactstrap';

function validateNumber(number) {
  if (!number || Number(number) === 0) {
    return '';
  }
  if (number > 0) {
    return parseInt(number);
  }
  if (number < 0) {
    return parseInt(Math.abs(number));
  }
}

export function NumberInput({
  style,
  placeholder,
  value,
  setter,
  settingChanged,
  setIsChanged,
}) {
  return (
    <InputGroup style={style}>
      <InputGroupText>{placeholder}</InputGroupText>
      <Input
        min="1"
        step="1"
        type="number"
        value={value}
        onChange={(event) => {
          setter(validateNumber(event.target.value));
          if (settingChanged) setIsChanged(true);
        }}
      />
    </InputGroup>
  );
}
