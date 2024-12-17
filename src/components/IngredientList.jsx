import AddButton from "./AddButton";

const IngredientList = ({availableIngredients, addAnIngredient}) => {
  return (
    <>
      <ul>
        {availableIngredients.map((ingredient, index) => (
          <li key={index} style={{color: ingredient.color}}>
            {ingredient.name}
            <AddButton addAnIngredient={addAnIngredient} ingredient={ingredient} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
