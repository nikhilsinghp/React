import "./ingredients.css"

export default function IngredientsComp(){
    let arr = ["2-3 large eggs","Salt, to taste","Pepper, to taste","1 tablespoon of butter or oil","Optional fillings: cheese, diced vegetables, cooked meats, herbs"]
    return <div>
        <h4>Ingredients</h4>
        <ul>
            {arr.map((ele,i,arr)=>{
                return <li key={i}>{ele}</li>
            })}
        </ul>
    </div>
}