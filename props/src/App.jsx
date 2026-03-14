import ParentComp from "./Parent";



 export let a = 10;
 
export default function App(){

  let b = 20;
  let c = 30;
  
  return <div>
    i am from app
    <ParentComp x={b} c={c}></ParentComp>
    <ChildComp></ChildComp>
  </div>
}