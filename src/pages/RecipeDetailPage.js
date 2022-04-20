import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Spinner, Alert } from 'reactstrap';

import { api } from '../api';
import { RecipeDetail } from '../components/RecipeDetail/RecipeDetail';
import { RecideDetailHeader } from '../components/RecipeDetail/RecipeDetailHeader';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => setRecipe(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }

  const handleDelete = (id) => {
    api
      .delete(`/recipes/${id}`)
      .then(navigate('/'))
      .catch((error) => setError(error));
  };

  return (
    <Container>
      <RecideDetailHeader recipe={recipe} handleDelete={handleDelete} />
      <RecipeDetail recipe={recipe} />
    </Container>
  );
}
