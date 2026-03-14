const App = ()=>{

  function abc(){
    console.log("I am from abc function");
    
  }

  // function handleMouseOver(e){

  //   console.log(e);
  //     e.target.style.backgroundColor="orange"
      

  // }

  // function handleMouseOut(e){
  //   e.target.style.backgroundColor="white"
  //     e.target.style.textAlign="center"
  //     e.target.style.backgroundColor="blue"
  //     e.target.style.textAlign="start"
  // }

  // function spanSingleClick(e){
  //   e.target.style.fontSize="50px"
  // }

  // function spanDoubleClick(e){
  //   e.target.style.fontSize="20px"
  // }


  function btnClick(e){
    console.log("I am from button");
    //e.stopPropagation()
    
  }

  function sectionClick(e){
    console.log("I am from section");
    
  }
  return <div>
    <section onClickCapture={sectionClick}>
      <button onClickCapture={btnClick}>btn</button>
    </section>
  </div>
}

export default App