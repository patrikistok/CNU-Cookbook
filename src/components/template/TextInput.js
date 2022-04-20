import { InputGroup, InputGroupText, Input } from 'reactstrap';

export function TextInput({
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
        type="text"
        value={value}
        onChange={(event) => {
          setter(event.target.value);
          if (settingChanged) setIsChanged(true);
        }}
      />
    </InputGroup>
  );
}
