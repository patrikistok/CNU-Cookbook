import { NumberInput } from '../template/NumberInput';
import { TextInput } from '../template/TextInput';

export function BasicInfo({
  editTitle,
  setEditTitle,
  setIsChanged,
  editServingCount,
  setEditServingCount,
  editPreparationTime,
  setEditPreparationTime,
  editSideDish,
  setEditSideDish,
}) {
  return (
    <div>
      <h4 style={{ textAlign: 'center', paddingBottom: 10 }}>
        Základné informace:
      </h4>
      <TextInput
        style={{ paddingBottom: 8 }}
        placeholder={'Název'}
        value={editTitle}
        setter={setEditTitle}
        settingChanged={true}
        setIsChanged={setIsChanged}
      />
      <NumberInput
        style={{ paddingBottom: 8 }}
        placeholder={'Počet porcí'}
        value={editServingCount}
        setter={setEditServingCount}
        settingChanged={true}
        setIsChanged={setIsChanged}
      />
      <NumberInput
        style={{ paddingBottom: 8 }}
        placeholder={'Doba přípravy (min)'}
        value={editPreparationTime}
        setter={setEditPreparationTime}
        settingChanged={true}
        setIsChanged={setIsChanged}
      />
      <TextInput
        style={{ paddingBottom: 8 }}
        placeholder={'Příloha'}
        value={editSideDish}
        setter={setEditSideDish}
        settingChanged={true}
        setIsChanged={setIsChanged}
      />
    </div>
  );
}
