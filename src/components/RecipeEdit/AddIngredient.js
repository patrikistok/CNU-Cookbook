import { Button } from 'reactstrap';
import { NumberInput } from '../template/NumberInput';
import { TextInput } from '../template/TextInput';

export function AddIngredient({
  editAddIngredientAmount,
  setEditAddIngredientAmount,
  editAddIngredientAmountUnit,
  setEditAddIngredientAmountUnit,
  editAddIngredientName,
  setEditAddIngredientName,
  handleAddIngredient,
}) {
  return (
    <div>
      <h4 style={{ textAlign: 'center', paddingBottom: 10 }}>
        Přidat ingredienci:
      </h4>
      <NumberInput
        style={{ paddingBottom: 8 }}
        placeholder={'Množství'}
        value={editAddIngredientAmount}
        setter={setEditAddIngredientAmount}
        settingChanged={false}
      />
      <TextInput
        style={{ paddingBottom: 8 }}
        placeholder={'Jednotka'}
        value={editAddIngredientAmountUnit}
        setter={setEditAddIngredientAmountUnit}
        settingChanged={false}
      />
      <TextInput
        style={{ paddingBottom: 8 }}
        placeholder={'Název'}
        value={editAddIngredientName}
        setter={setEditAddIngredientName}
        settingChanged={false}
      />
      <Button
        color="primary"
        disabled={!editAddIngredientName}
        onClick={() => handleAddIngredient()}
      >
        Přidat
      </Button>
    </div>
  );
}
