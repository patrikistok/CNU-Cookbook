import { Row, Col, Button } from 'reactstrap';

export function RecideDetailHeader({ recipe, handleDelete }) {
  return (
    <Row>
      <Col lg={9}>
        <h1 style={{ padding: 15 }}>{recipe.title}</h1>
      </Col>
      <Col lg={3} style={{ marginTop: 20 }}>
        <Button
          href={`/recipe/${recipe.slug}/edit`}
          style={{ marginBottom: 15 }}
          color="primary"
        >
          Upravit
        </Button>
        <Button
          style={{ marginBottom: 15, marginLeft: 15 }}
          onClick={() => handleDelete(recipe._id)}
          color="danger"
        >
          Smazat
        </Button>
      </Col>
    </Row>
  );
}
