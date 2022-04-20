import { List } from 'reactstrap';

export function RecipeDirections({ directionsFiltered }) {
  return (
    <div>
      <h3 style={{ paddingLeft: 15 }}>Postup:</h3>
      <List type="unstyled">
        {directionsFiltered.map((direction, index) => (
          <li
            style={{ paddingTop: 10, fontSize: 17, paddingLeft: 15 }}
            key={index}
          >
            {direction}
          </li>
        ))}
      </List>
    </div>
  );
}
