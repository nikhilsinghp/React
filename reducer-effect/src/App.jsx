import { useReducer, createContext, useEffect } from "react"
import All from "./All"
import Cart from "./Cart"
import Nav from "./Nav"
import Loading from "./loading"
import ErrorHandler from "./ErrorHandler"

function Reducer(state, action) {

  switch (action.msg) {

    case "error":
      return { ...state, error: true, loading: false };
      break;
    case "success":
      return { ...state, loading: false, error: false, data: action.payload };
      break;
    case "addCart" :
      return{...state,cart:action.payload}

  }
}

export let myContext = createContext();

const App = () => {

  useEffect(() => {

    async function fetchData() {
      let response = await fetch("https://api.escuelajs.co/api/v1/products");

      if (response.status != 200) {
        dispach({ msg: "error" })
      }

      let data = await response.json();
      dispach({ msg: "success", payload: data });
      console.log(data);
    }
    fetchData();

  }, [])



  let [state, dispach] = useReducer(Reducer,
    {
      data: "",
      cart: [],
      count: "",
      loading: true,
      error: false,

    })
  console.log(state);

  if (state.loading) {
    return <Loading></Loading>
  }
  if (state.error) {
    return <ErrorHandler></ErrorHandler>
  }


  return <myContext.Provider value={{...state,dispach}}>
    <div>
      <Nav></Nav>
      <section>
        <All></All>
        <Cart></Cart>
      </section>
    </div>
  </myContext.Provider>
}
export default App;