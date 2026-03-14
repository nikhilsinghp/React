import "./simple.css"

export default function SimpleComp(){
    return <div className="simp">
        <h1>Simple Omelette Recipe</h1>
        <p> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
  to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        <div>
            <h4>Preperation Time</h4>
            <ul>
                <li><strong>Total</strong>: Approximately 10 minutes</li>
                <li><strong>Preparation</strong>: 5 minutes</li>
                <li><strong>Cooking</strong>: 5 minutes</li>
            </ul>
        </div>
    </div>
}