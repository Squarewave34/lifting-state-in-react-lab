const RemoveButton = ({removeIngredient, ingredient})=>{

  const remove = ()=>{
    removeIngredient(ingredient)
  }

  return(
    <button onClick={remove}>-</button>
  )
}

export default RemoveButton