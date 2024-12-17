import RemoveButton from "./RemoveButton";

const BurgerStack = ({stack, removeIngredient}) => {
  return(
    <>
      <ul>{stack.map((ingredient, index)=>(
        <li key={index} style={{color:ingredient.color}}>
          {ingredient.name}
          <RemoveButton removeIngredient={removeIngredient} ingredient={ingredient}/>
        </li>
      ))}</ul>
    </>
  )
};

export default BurgerStack;
