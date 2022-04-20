import { Alert, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import { BasicInfo } from './BasicInfo';
import { AddIngredient } from './AddIngredient';
import { AddGroup } from './AddGroup';
import { IngredientTable } from '../RecipeDetail/IngredientTable';

export function RecipeEdit({
  setIsChanged,
  editTitle,
  setEditTitle,
  editServingCount,
  setEditServingCount,
  editPreparationTime,
  setEditPreparationTime,
  editSideDish,
  setEditSideDish,
  editIngredients,
  editDirections,
  setEditDirections,
  editAddIngredientAmount,
  setEditAddIngredientAmount,
  editAddIngredientName,
  setEditAddIngredientName,
  editAddIngredientAmountUnit,
  setEditAddIngredientAmountUnit,
  editAddGroupName,
  setEditAddGroupName,
  handleDeleteIngredient,
  handleAddIngredient,
  handleAddGroup,
}) {
  return (
    <Form>
      <Row>
        <Col lg={4}>
          <FormGroup>
            <BasicInfo
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              setIsChanged={setIsChanged}
              editServingCount={editServingCount}
              setEditServingCount={setEditServingCount}
              editPreparationTime={editPreparationTime}
              setEditPreparationTime={setEditPreparationTime}
              editSideDish={editSideDish}
              setEditSideDish={setEditSideDish}
            />
            <AddIngredient
              editAddIngredientAmount={editAddIngredientAmount}
              setEditAddIngredientAmount={setEditAddIngredientAmount}
              editAddIngredientAmountUnit={editAddIngredientAmountUnit}
              setEditAddIngredientAmountUnit={setEditAddIngredientAmountUnit}
              editAddIngredientName={editAddIngredientName}
              setEditAddIngredientName={setEditAddIngredientName}
              handleAddIngredient={handleAddIngredient}
            />
            <AddGroup
              editAddGroupName={editAddGroupName}
              setEditAddGroupName={setEditAddGroupName}
              handleAddGroup={handleAddGroup}
            />
          </FormGroup>
        </Col>
        <Col lg={4}>
          <FormGroup>
            {editIngredients.length > 0 && (
              <div>
                <h4 style={{ textAlign: 'center', paddingBottom: 10 }}>
                  Ingredience:
                </h4>
                <IngredientTable
                  ingredients={editIngredients}
                  handleDeleteIngredient={handleDeleteIngredient}
                  isEdit={true}
                />
              </div>
            )}
            {editIngredients.length === 0 && (
              <div>
                <h4 style={{ textAlign: 'center', paddingBottom: 10 }}>
                  Ingredience:
                </h4>
                <Alert color="primary">Žádné ingredience</Alert>
              </div>
            )}
          </FormGroup>
        </Col>
        <Col lg={4}>
          <FormGroup>
            <h4 style={{ textAlign: 'center', paddingBottom: 10 }}>Postup:</h4>
            <Input
              style={{ height: 500 }}
              value={editDirections}
              id="postup"
              name="postup"
              type="textarea"
              onChange={(event) => {
                setEditDirections(event.target.value);
                setIsChanged(true);
              }}
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
}
