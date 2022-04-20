import { Button, Table } from 'reactstrap';

export function IngredientTable({
  ingredients,
  handleDeleteIngredient,
  changeServingCount,
  originalServingCount,
  isEdit,
}) {
  return (
    <Table>
      <tbody>
        {ingredients?.map((ingredient, index) => {
          if (ingredient.isGroup) {
            return (
              <tr key={index}>
                {isEdit && (
                  <th
                    style={{
                      backgroundColor: 'Lavender',
                    }}
                    width="10%"
                  >
                    <Button
                      style={{
                        alignContent: 'center',
                      }}
                      size="sm"
                      color="danger"
                      onClick={() => handleDeleteIngredient(index)}
                    >
                      X
                    </Button>
                  </th>
                )}
                <th
                  colSpan={3}
                  style={{
                    textAlign: 'center',
                    backgroundColor: 'Lavender',
                  }}
                >
                  {ingredient.name}
                </th>
              </tr>
            );
          }
          return (
            <tr key={index}>
              {isEdit && (
                <td width="10%">
                  <Button
                    style={{
                      alignContent: 'center',
                    }}
                    size="sm"
                    color="danger"
                    onClick={() => handleDeleteIngredient(index)}
                  >
                    X
                  </Button>
                </td>
              )}
              {isEdit && (
                <td width="20%" style={{ textAlign: 'right' }}>
                  {ingredient.amount}
                </td>
              )}
              {!isEdit && (
                <td width="20%" style={{ textAlign: 'right' }}>
                  {ingredient.amount
                    ? Number(
                        Math.round(
                          (ingredient.amount * changeServingCount) /
                            originalServingCount +
                            'e' +
                            3,
                        ) +
                          'e-' +
                          3,
                      )
                    : ingredient.amount}
                </td>
              )}
              <td width="10%">{ingredient.amountUnit}</td>
              <td>{ingredient.name}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
