import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Spinner, Alert, Container } from 'reactstrap';

import { api } from '../api';
import { RecipeEdit } from '../components/RecipeEdit/RecipeEdit';
import { RecipeEditHeader } from '../components/RecipeEdit/RecipeEditHeader';

export function RecipeEditPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editServingCount, setEditServingCount] = useState('');
  const [editPreparationTime, setEditPreparationTime] = useState('');
  const [editSideDish, setEditSideDish] = useState('');
  const [editIngredients, setEditIngredients] = useState([]);
  const [editDirections, setEditDirections] = useState('');
  const [editAddIngredientAmount, setEditAddIngredientAmount] = useState('');
  const [editAddIngredientName, setEditAddIngredientName] = useState('');
  const [editAddIngredientAmountUnit, setEditAddIngredientAmountUnit] =
    useState('');
  const [editAddGroupName, setEditAddGroupName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => {
        setRecipe(res.data);
        setEditTitle(res.data.title);
        if (res.data.servingCount) setEditServingCount(res.data.servingCount);
        if (res.data.preparationTime)
          setEditPreparationTime(res.data.preparationTime);
        if (res.data.sideDish) setEditSideDish(res.data.sideDish);
        if (res.data.ingredients) setEditIngredients(res.data.ingredients);
        if (res.data.directions) setEditDirections(res.data.directions);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }

  const handleDeleteIngredient = (index) => {
    editIngredients.splice(index, 1);
    setEditIngredients([...editIngredients]);
    setIsChanged(true);
  };

  const handleAddIngredient = () => {
    setEditIngredients([
      ...editIngredients,
      {
        name: editAddIngredientName,
        amountUnit: editAddIngredientAmountUnit,
        amount: editAddIngredientAmount,
      },
    ]);
    setEditAddIngredientName('');
    setEditAddIngredientAmount('');
    setEditAddIngredientAmountUnit('');
    setIsChanged(true);
  };

  const handleAddGroup = () => {
    setEditIngredients([
      ...editIngredients,
      { name: editAddGroupName, isGroup: true },
    ]);
    setEditAddGroupName('');
    setIsChanged(true);
  };

  const handleEdit = () => {
    if (editTitle) {
      recipe.title = editTitle;
      recipe.servingCount = editServingCount;
      recipe.preparationTime = editPreparationTime;
      recipe.sideDish = editSideDish;
      recipe.directions = editDirections;
      recipe.ingredients = editIngredients;
      api
        .post(`/recipes/${recipe._id}`, recipe)
        .then((res) => navigate(`/recipe/${res.data.slug}`))
        .catch((error) => setError(error));
    } else {
      alert('Název je povinná položka');
    }
  };

  return (
    <Container>
      <RecipeEditHeader
        slug={slug}
        editTitle={editTitle}
        isChanged={isChanged}
        handleEdit={handleEdit}
      />
      <RecipeEdit
        setIsChanged={setIsChanged}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editServingCount={editServingCount}
        setEditServingCount={setEditServingCount}
        editPreparationTime={editPreparationTime}
        setEditPreparationTime={setEditPreparationTime}
        editSideDish={editSideDish}
        setEditSideDish={setEditSideDish}
        editIngredients={editIngredients}
        editDirections={editDirections}
        setEditDirections={setEditDirections}
        editAddIngredientAmount={editAddIngredientAmount}
        setEditAddIngredientAmount={setEditAddIngredientAmount}
        editAddIngredientName={editAddIngredientName}
        setEditAddIngredientName={setEditAddIngredientName}
        editAddIngredientAmountUnit={editAddIngredientAmountUnit}
        setEditAddIngredientAmountUnit={setEditAddIngredientAmountUnit}
        editAddGroupName={editAddGroupName}
        setEditAddGroupName={setEditAddGroupName}
        handleDeleteIngredient={handleDeleteIngredient}
        handleAddIngredient={handleAddIngredient}
        handleAddGroup={handleAddGroup}
      />
    </Container>
  );
}
