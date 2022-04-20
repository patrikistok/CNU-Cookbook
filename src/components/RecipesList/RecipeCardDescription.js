import { List } from 'reactstrap';

function calculateTime(time) {
  const hours = parseInt(time / 60);
  const minutes = time % 60;
  if (hours > 0 && minutes === 0) {
    return `${hours} h`;
  }
  if (hours > 0 && minutes > 0) {
    return `${hours} h ${minutes} min`;
  }
  return `${minutes} min`;
}

export function RecipeCardDescription({ preparationTime, sideDish }) {
  return (
    <List type="unstyled">
      {preparationTime != null && preparationTime > 0 && (
        <li>{`Čas přípravy: ${calculateTime(preparationTime)}`}</li>
      )}
      {sideDish != null && <li>{`Přílohy: ${sideDish}`}</li>}
      {sideDish == null &&
        (preparationTime == null || preparationTime <= 0) && (
          <li>{`Žádné informace`}</li>
        )}
    </List>
  );
}
