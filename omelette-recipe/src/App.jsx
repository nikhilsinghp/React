import ImageComp from "./Image"
import SimpleComp from "./simple"
import IngredientsComp from "./Ingredients"
import InstructionComp from "./Instruction"
import NutritionComp from "./Nutrition"

import "./app.css"

export default function AppComp(){
    return <div className="cont">
        <div>
            
            <ImageComp></ImageComp>
            <SimpleComp></SimpleComp>
            <IngredientsComp></IngredientsComp>
            <InstructionComp></InstructionComp>
            <NutritionComp></NutritionComp>

            
        </div>
    </div>
}