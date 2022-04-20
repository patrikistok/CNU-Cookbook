import { useState } from 'react';
import { Alert, Row, Col, Container } from 'reactstrap';
import { IngredientTable } from './IngredientTable';
import { RecipeCardDescription } from '../RecipesList/RecipeCardDescription';
import { RecipeDirections } from './RecipeDirections';
import { NumberInput } from '../template/NumberInput';

export function RecipeDetail({ recipe }) {
  const [changeServingCount, setChangeServingCount] = useState(
    recipe.servingCount,
  );

  let directionsFiltered = [];
  if (recipe.directions) {
    let directionsSplit = recipe.directions.split('\n');
    directionsFiltered = directionsSplit.filter((word) => word.length > 0);
  }

  return (
    <Container>
      <Row>
        {((recipe.preparationTime && recipe.preparationTime > 0) ||
          recipe.sideDish) && (
          <RecipeCardDescription
            preparationTime={recipe.preparationTime}
            sideDish={recipe.sideDish}
          />
        )}
      </Row>
      <Row style={{ paddingTop: 15 }}>
        <Col lg={4}>
          {recipe.servingCount && recipe.servingCount > 0 && (
            <NumberInput
              style={{ paddingBottom: 8 }}
              placeholder={'Počet porcí'}
              value={changeServingCount}
              setter={setChangeServingCount}
              setIsChanged={false}
            />
          )}
          {recipe.ingredients?.length > 0 && (
            <div>
              <h5 style={{ textAlign: 'center' }}>Ingredience:</h5>
              <IngredientTable
                ingredients={recipe.ingredients}
                changeServingCount={
                  recipe.servingCount ? changeServingCount : 1
                }
                originalServingCount={
                  recipe.servingCount ? recipe.servingCount : 1
                }
                isEdit={false}
              />
            </div>
          )}
          {(recipe.ingredients?.length === 0 || !recipe.ingredients) && (
            <Alert color="primary">Žádné ingredience</Alert>
          )}
          <div>
            <p style={{ paddingTop: 10 }}>
              Naposledy upraveno:{' '}
              {new Date(recipe.lastModifiedDate).toLocaleDateString('en-GB')}
            </p>
          </div>
        </Col>
        <Col lg={7}>
          {directionsFiltered.length > 0 && (
            <RecipeDirections directionsFiltered={directionsFiltered} />
          )}
          {directionsFiltered.length === 0 && (
            <Alert color="primary">Žádný postup</Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}
