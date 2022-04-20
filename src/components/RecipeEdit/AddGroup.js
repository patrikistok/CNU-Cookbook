import { Button } from 'reactstrap';
import { TextInput } from '../template/TextInput';
export function AddGroup({
  editAddGroupName,
  setEditAddGroupName,
  handleAddGroup,
}) {
  return (
    <div>
      <h4 style={{ textAlign: 'center', paddingBottom: 10 }}>
        Přidat skupinu:
      </h4>
      <TextInput
        style={{ paddingBottom: 8, paddingTop: 8 }}
        placeholder={'Název'}
        value={editAddGroupName}
        setter={setEditAddGroupName}
        settingChanged={false}
      />
      <Button
        color="primary"
        disabled={!editAddGroupName}
        onClick={() => handleAddGroup()}
      >
        Přidat
      </Button>
    </div>
  );
}
