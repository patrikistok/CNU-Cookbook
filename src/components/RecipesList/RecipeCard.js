import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import placeholder from '../../images/food-placeholder.png';
import { RecipeCardDescription } from './RecipeCardDescription';

export function RecipeCard({ title, preparationTime, slug, sideDish }) {
  return (
    <Link
      to={`/recipe/${slug}`}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <Card className="h-100">
        <CardImg src={placeholder} alt="Preview" top />
        <CardBody>
          <CardTitle tag="h6">{title}</CardTitle>
          <CardSubtitle>
            <RecipeCardDescription
              preparationTime={preparationTime}
              sideDish={sideDish}
            />
          </CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
}
