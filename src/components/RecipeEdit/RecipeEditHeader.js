import { Row, Col, Button } from 'reactstrap';

export function RecipeEditHeader({ slug, editTitle, isChanged, handleEdit }) {
  return (
    <Row>
      <Col lg={9}>
        <h1 style={{ padding: 15 }}>Úprava receptu: {editTitle}</h1>
      </Col>
      <Col lg={3} style={{ marginTop: 20, marginBottom: 15 }}>
        <Button
          disabled={!isChanged}
          type="submit"
          color="success"
          onClick={() => handleEdit()}
        >
          Uložit
        </Button>
        <Button
          href={`/recipe/${slug}`}
          style={{ marginLeft: 15 }}
          color="danger"
        >
          Zrušit
        </Button>
      </Col>
    </Row>
  );
}
