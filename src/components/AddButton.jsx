const AddButton = ({addAnIngredient, ingredient})=>{

  const add = ()=>{
    addAnIngredient(ingredient)
  }
  
  return(
    <button onClick={add}>+</button>
  )
}

export default AddButton