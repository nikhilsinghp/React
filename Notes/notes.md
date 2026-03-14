<!--!REACT BASICS-->

<!--!What is JavaScript-->?
----------------------------------------------------------------------------------

It is scripting language which is used in frontend development for creating dynamic web pages.

Characteristics:
================
1. It is Scripting language ===> which is not using compiler for execution.
2. High Level Programming Language ===> human understandable
3. Dynamically Typed Language ===> we dont have to define data type. DataType will automatically detect at the run time
4. Single Threaded Langauage ===> it has one callStack for all the execution.
5. Interpreted Language ===> code will executed line by line
6. Synchronous in nature but can perform asynchronous operation.
      synchronous ===> block the execution of next code till the execution of current code.   eg for loop ,while loop etc

      asynchronous ===> non  blocking execution eg : dom event etc

7. loosely typed language ===> it is not strict syntax

----------------------------------------------------------------------------------------------------------------------

ES6 features: 2015  ===> ecma script
let, const, arrow functions ()=>{}, fetch, async await, rest operator, spread operator

Browser Storage:
local storage: data is permanent
session storage: data is not permanent like closing tab or browser will erase data.


Asyncrohnous in js : 1. callback 2. promise

Tricky Questions: 

console.log(5=="5") // true
console.log(5==="5") // false
console.log(5+"5") // 55
console.log(5++5+"5") // 105
console.log(5*"5") // 25
console.log(5=="a") // NaN
bnnnnnn
console.log(typeOf undefined) // undefined
console.log(typeOf []) // object
console.log(typeOf null) // object

======================================================================================================================


<!--!How to declare variable:-->

for declaring variable we have three keywords:
 1. let
 2.var
 3.const

 <let keyword:> redeclaration is not possible.


 <var keyword:> redeclaration is possible.

 <const keyword:>It is used to take constant value.
                Here, we cannot do re-declaration as well as re-initialization.
                Here declaration and initialization should be done int the same line.


<!--!> Datatype:-->

Datatype is used to specify what type of data we are storing or using  in a javaScript program or memory.

There are two types of datatype:
  1.Primitive DataType
  2. Non-primitive Datatype

<!--!Primitive DataType:-->
  1. <!--Number-->: it contains all integer and floating point integers.
  2. <!--string-->: series of character enclosed with "",'' and ``
  3. <!--boolean:--> it contains boolean values i.e. true or false.
  4. <!--undefined:--> any variable which is declared but not initialized.
                      typeof undefined is undefined.
  5.<!--null-->: variable is declared and initialized with null.
                 typeof null is object.
  6.<!--bigint-->: it contains large integer values.We have to write in this:
            <!--eg-->: let large = 2n;
                       console.log(typeof large); // bigint


<!--!Non-Primitive Datatypes -->:
  1.Array
  2.Object
  3.Function

<!--! typeof opertaor --> :


<!--typeof operator--> is used to display datatype.
 

 <!--! What is function-->
 Function is set of code, used for doing particular task to achieve code reusability.
 Whenever we are creating the function, if we want to execute we have to call the call the function.

 <!-- Types of Function-->
   <!--! 1. Named Function -->
      The function that having some name is called Named Function.

  <!-- Syantax-->

    function functionName{
      // body of function
    }

<!--! annonymous function-->
  The function that does not have any name is called annonymous function.

  we cannot call anonymous function, so we need to store function in a variable.

  <!--! Higher Order function-->
    Function that takes another function as parameter is called higher order function.

    <!--! CallBack function-->
    The function that is sent as a parameter to the higher order function, is called callback function.


    <!--! Map High Order method -->  

    map is higher order array method that takes 3 three parameters(element,index,array).
    parameter name can be anything.
    it is used for traversing and if we want to perform  any operation with all the elements. Map method will return new array.
      // How to write:

      arr.map((ele,index,array)=>{

        console.log(ele,index,array)

      });


let a = arr.map((ele,index,array)=>{

        return ele;

});

console.log(a);

<!--! Filter Method-->

<!-- 1.It is also higher order array method.
it is used to traverse the aaray and check the condition.>


<!--! reduce() method--> is used to convert the array into single value((like by addinf multiplying all elements of array)). It can acccept 4 parameters(accumulator,element,index,array). It is higher order array method. By defalut the accumulator value is the first element of an array.



======================================================================================================================

<!--!ARRAY>

// methods

// 1. push() --> this method is used to add any element at the end of the array
// it will return the length of modified array.


// 2.pop() ---> it is used to remove the last element from the array
 // it will return the removed element



// it will return the last element of an array



// 3.unshift() ---> add an element at the start of an array
// it will return the length of modified array


// 4. shit() ---> remove the start element of an array
// it will return the removed element






// 5.indexof() ---> it will give the index of given element in an array

//6. concat() ---> it will combine two or more arrays and return new array



//7. includes()  ---> it will check the element is present or not.
// returns true, if element is present else, false




// 8. join() ---> used to convert any array into string


    
----------------------------------------------------------------------------------------------------------------------


// !  Methods Of String 

// !  1. toUpperCase()

// this method is used to convert one string into uppercase and it will return one new string original string it will not change.

let upper = str1.toUpperCase()

console.log(upper)
console.log(str1)

// ! 2. toLowerCase()

// this method is used to convert one string into lowercase and it will return one new string original string it will not change.


// ! 3. trim()

// it is used to remove the space from both sides of the string.
// it is returing one new string.


// ! 4. indexOf()

// this method is used to return the index of the given character. 
// it will take the first appearance of the given character.

console.log(empName.indexOf("i"))
console.log(empName.indexOf("l"))

// ! 5. lastIndexOf()

// this method is used to return the index of the given character. 
// it will take the last appearance of the given character.



// ! 6. charAt()

// this method is used to know the character, present in the given position.


// ! 7. includes()

// it is used to know the given string is present or not. 
// if it is present it will return true else it will return false.


// ! 8. concat()

// it is used to combine two or more than two strings and it will return one new string.

// ! 9. replace()

// it is used to replace one string with another string. 
// it will replace only the first occurance.



// ! 10. replaceAll()

// it is used to replace one string with another string. 
// it will replace all the occurances of the string.


// ! 11. split()

// it is used to convert any string into array. 

// ! 12. slice() 

// it is used to extract one string from another string.
// it takes two parameters(startIndex, endIndex)
// it does not include the end index value.
// it can take negative value also
// by using this method we can extract only from left to right.


// ! 13. substring()

// it is used to extract one string from another string.
// it takes two parameters(startIndex, endIndex)
// it does not include the end index value.
// it will not take negative value. 



======================================================================================================================



<!--!JSON-->
// JSON (JavaScript Object Notation) is a lightweight data-interchange format 
// that is easy for humans to read and write, and easy for machines to parse and generate.  
 
//!  Advantages of JSON: - 

//? Human-Readable:

//  JSON's structure is easy for developers to understand and  write. 

//? - Lightweight: 

// JSON is a minimal format that reduces the size of the data being transmitted. 

//? - Language-Independent:

//  JSON can be used with many programming languages, 
// including JavaScript, Python, Ruby, Java, etc. 



// !  1.  JSON.stringify()

// this method is used to convert any javascript object into json.
// typeof json is string. 


// !  2. JSON.parse()

// it is used to covert jsondata into javascript object. 



======================================================================================================================


// Notes on Spread Operator(...)
/* it is used to unpack elements or properties from an array or object

1.it is used to copy the array and copy the object  and merge the array and merge the object
   and in function it is used as an arguments



   value copy vs reference copy:-


     value copy :-

     it is used to copy the primitive data types like number,string,boolean i ti primitive data types create a new memory location and assign the value to that location
     so when we change the value of the copied variable it will not affect the original variable

     reference copy:-

     if we copy directly non-primitive data types like object,array it will copy the reference of the original variable
     so when we change the value of the copied variable it will affect the original variable


     Shallow Copy:-

     here 1st level properties will be copied but nested objects properties will be refered or arrays
      if we do any changes  will still be referenced to the original object or array
      but if we do changes in nested object or array it will not affect the original object or array

      in 2ways we can do shallow copy

      i. using spread operator(...)
      ii. using Object.assign() method


    DeepCopy:-
    It will create entirely new object with new reference, so if we do changes in one object it will never other object.
    we can achieve deep copy using two ways:
    1. JSON.parse(JSON.stringify(object))
    2. structuredClone(object)


    

  
*/

======================================================================================================================

 promise => it is one js object.
         we can create promise by using new keyword.
         It is used to handle asynchronized operation.
         it takes one callback function, inside callback function it will take two parameters resolve and reject.
         for handling the resolve we need .then() and for handling reject we need .catch()
         .then() and .catch() will take one parameter (data,error)respectively.


//States of promise => 1.Pending=> if nothing is present inside promise neither reject nor resolve then it is called pending state
                //     2. Fulfilled => if only resolve is present inside promise then it is fulfilled state.
                //     3. Rejected =>if only reject is there then it is called rejected state.(together reject and resolve will not present)


======================================================================================================================



/* Notes:

Fetch: is a method for promise.
       it is modern way of handling HTTP request. 
       it will accept two arguments. one  is : url and second is : object. That object will accept 3 properties. 1. method  2. headers 3. body

       1. methods ==> get, post, put, patch, delete
       2. headers ==> what type of data we are going to send JWT authorization
       3. body ==> actual data 

Steps:

Step1:fetch the data ==> it will return the promise
Step2: handle the promise ===> it will return response
step3: convert the promise int json ===> it will return again promise
Step4: handle the promise ===> it will original data 

the default of fetch is GET
Fetch will return promise

*/

======================================================================================================================

<!--!DOM-->


// Notes
/* Target:
1.getElementById ===> return type ---> single element
2.getElementsByClassName ===> return type ---> html collection
3.getElementsByTagName ===> return type ---> html collection
4.getElementsByName ===> return type ---> node list
5.document.querySeletor ===> return type ---> single element
6.document.querySelectorAll ===> return type ---> node list


node list ==> is live
html collection ==> live and static 

create element:
1.document.createElement()
variableName.innerHtml

how to add text in element:
1.innerHTML  ===> we can add text, spaces, tags
2.innerText ===> we can add text
3.textContent  ===> we can add text and space


adding elements is html:
.append()  ===> more than one element as last child
.appendChild() ===> only one element as a last child
.


*/



======================================================================================================================

<!--!Event in js-->
Actions triggerd by browser or user is called an event.

Event types:
---------------------
1.keyBoardEvent  --> keydown,keyup,keypress
2.MouseEvents    ---> click,dblclick,mouseover,mouseinput
3.FormEvents ---> submit,reset,input,change
4.WindowEvents----> pageLoad,pageResize

Adding events:====>
------------------------

we can add event in three ways:

 1.addEventListner() 2. Html attributes  3.dom elements properties 

Note: addEventListner() is preffered one

======================================================================================================================


// setTimeout() => to execute any function after some time.
      //      => it will take two arguments. => one call back function and timeout.
//            => it will execute only once

// setInterval() => to execute any function after some time again and again for specified interval.
  //             => it will take two arguments. => one call back function and time interval.
  //             => it will execute again and again for a specified time interval
----------------------------------------------------------------------------------------------------------------------

Event Propogation:
it will represent how an event will travel through DOM tree.

It has 3 phases:
1.Capturing phase: event travel from window to targetted element
2.Targetting phase: event reaching the targetted element.
3.Bubbling phase: event travelling from targetted element back to window. ===> All the event trigerred in bubbling phase i.e.It is by default propogation for event  

to override this i.e. event propogation from window to targetted element then we need to pass true as an third argument to addEventListner().

      DOM TREE:                     WINDOW ==> doucument   ==> html ===> head
                                                                    ===> body   ===> parent div ===> child div ===> button(targetted element)

                                                                    All the event start from the window object.

=====================================================================================================================                                                                    

addEventListner()  ==> it is used to add event to targetted element.  It accept three arguments: 1.event type i.e. click etc,  
                                                                                                 2. event handler i.e. callback function
                                                                                                 3. capturinzg value i.e. event propogation variable of boolean type ==> true or false ===> by default is false 

eventType ==>    when the event should be trigerred.
eventHandler ==>  what should be executed. It is a callback function. it will be accepting one argument that is event object.This object contains all the information about event.
capturingValue ===> true or false. It controls which should be trigerred first parent or child elements event.
                    false ==> means event trigerred in bubbling phase.
                    true ==> means event trigerred in capturing phase.
                    
                    
event.stopPropogation() ==> it is used to stop the event propogation. 

======================================================================================================================

<!--!Asynchronous And Synchronous-->

Synchronous execution==> means blocking the next execution until the code is executed
            /// Single thread means ===> all the execution happen in one call stack
                                             /// Js is single threaded but support asynchronous execution

Asynchronous execution ===> means non blocking the next execution if the current execution(code) is time taking(asynchronus execution)
                                    ///  Asynchronous execution in JS ===> fetch,promise,dom,setTimeout,setInterval 
                                    /// All the asynchronous opeartion will accept callback function as an argument




















========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================





<!--!React Installation process--->

To install react:
----------------------------------------------------------------------------------
npm create vite@latest
project name ---- any name we can provide
select framework ===> react
variant ===> javascript
use rolldown vite ===> yes
install npm ====> yes

to see the output either ctrl+click on link or o+enter

for terminate the server ===> ctrl+c
start the server =====> npm run dev

======================================================================================================================


<!--!What is react-->
It is a javascript library which is used to create single page application.

features:
===========
1.virtual dom
2.it used Jsx
3.it is component based architure
4. support rounding
5.it is unidirectional
5.it support data binding
6.supports hooks


<!--!Element--!>
----------------------------------------------------------------------------------

In react elements are treated as object. It is the fundamental building block of creating user interface. 

We can create element in 2 ways in react:
1. React.createElement()
2. JSX

1. React.createElement() ===> will accept 3 arguments: 
  a. elementType b. attributeObject  c. displaying content

Syntax==> 

React.createElement(elementType,{},displayingContent)
eg: React.createElement("h1",{id:"abc"},"I am header")

----------------------------------------------------------------------------------

2.JSX ==> stands for JavaScript xml

It is another way to create element in React apart from react.createElement(elementName,AttributeObject,DisplayContent). react.createElement() does not allow html syntax.

JSX will create the element with the help of html synatx.

<!--!Create Element using JSX-->:
----------------------------------------------------------------------------------
 <!--!Create one element>
 -------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(<h1>i am from react</h1>)

/* Create multiple element*/ 

ReactDOM.createRoot(document.getElementById("root")).render(<div>
    <h1>I am header 1</h1>
    <h1>I am header2</h1>
</div>)

<!--!Rule of JSX-->:
----------------------------------------------------------------------------------
1. JSX should return one parent element. it will not accept multiple elements but we can create n number of elements inside the parent element.

2. In JSX all the element name should be in lowercase unlike html(where it will accept lowercase and uppercase).

3.All the attributes names of an element should be in camelCase.

4. All elements should be closed either by using another closing tag or  self closing tag i.e. "/" symbol inside the opening tag itself.

5. In JSX, some attributes anme has been changed for eg: class represent className
and for represent htmlFor.

<!--!To Embbed the content>
----------------------------------------------------------------------------------

To embed or append  the content we have to use createRoot() and render() present in react-dom module. 
createRoot() will accept targettedElement as an argument
render() it will accept createdElement as an argument and it is used to append the content.

eg :
ReactDOM.createRoot(document.getElementById("root")).render(<h1>i am from react</h1>)




<!--! Expression-->
----------------------------------------------------------------------------------

Expression===> it is used to access variables and perform opertions in jsx using {} unlike stringinterpolation(i.e. used to access variables in string using ${}) in javascript.

Any js code thate returns value is called as expression.

<!--!Rules for expression-->
----------------------------------------------------------------------------------

1. We cannot declare variables inside expression

2. We cannot use decision making statements inside like if-else,switch etc. but we can use ternary operator and && operator to provide conditions

eg: {a%2==0 ? "even number" : "odd number"} 

eg: h2>{a%2==0 && "this will displayed if it is even only"}</h2>
<h2>{a%2==0 || "this will displayed if it is even or odd"}</h2>

eg2: <h1>{str.length < 5 ? <a href="#">this is anchor tag</a> : <span>this is span tag</span>}</h1>

 3. Inside Expression  we cannot use looping statements then we have to use inbuilt function like map(), filter() etc. for eg to iterate an array then go for map() recommended or filter().
eg: let ipl = ["csk,"mi","rcb","srh"]
    <ul>
        {ipl.map((e)=>{
            return <li>{e}</li>
        })}
    </ul>

4.we can IIFE function inside expression



<!--!Key-->
----------------------------------------------------------------------------------

It is special attribute in element which helps to identify elements uniquely in a list of elements.
It will avoid rerendering when component changes.

<!--!Fragment-->
----------------------------------------------------------------------------------
It is used to wrap the elements withoud creating any extra node in dom tree.

Two ways to create Frament:
1. Fragment =====>component ----> here we can provide attributes
2.<></>   ====> here we cant provide attributes

<!--!Component-->
----------------------------------------------------------------------------------
It is self contained piece of resuable code which help us to create specific part of UI.

Note: self contained means own logic, own css  without depending others

We can create components in 2 ways:

1.function based  ===> simple syntax and less line of code . Component class not needed.Function based is a stateless component but when we create state with the help of useState hooks.Not supports life cycle methods but we can get life cycle methods useEffect hook.

2. class based ====> complex syntax, more line of code. Component classes compulsary needed to create component. Class is a stateful component. support life cycle methods.




:::Rules of component:::
----------------------------------------------------------------------------------
1.Name of the comonent should be in title case
2.return type should be jsx
3. it should be called inside tag opening and cosing braces.


<!--!Props-->
----------------------------------------------------------------------------------
Props stands for properties. 
It is an object used to transfer the data from one component to another component.
It is uni directional. that means we can transfer the data from parent component to child component.
React also suggests to do in unidirectional. We can do it in bidirectional.
Props are mutable while states are mutable.
Data belongs to parent component where as in data belongs to whole component.
used for sharing data where as state used for dynamic changes in ui.
Props and state both will also cause rerendering.

Note:
--------
We can provide props values int two ways:
1. as an attribute to component === here we can provide any name as a key
2.by using children to component key ===> key name should be children

DRAWBACK:
-----------
if I want to transfer the data from parent to great grand child, we cant pass the data directly.
if we have to pass through parent ====> child ====> grandchild====> great grand child. this process is props drilling.

ALTERNATIVE: 

Alternative to prop is useContext. ======> we can directly pass data from parent to great grand child.

Use Context is having three stages:
1. create context   2. provider with value attribute     3. useContext



<!--!React Events-->
----------------------------------------------------------------------------------

Actions triggered by browser or user is called as events.In react, all the types of browser events called as SyntheticBaseEvents for better performance and consistency.

For all the browser events, one wrapper object is there and that object is called SyntheticBasedEvents.

<!--!Changes in React-->
----------------------------------------------------------------------------------

1. eventType should in camelCase.
2. eventHandlerFunctions should be passed not called.
3. for capturing we have seperate eventType i.e. onClickCapture, onInputCapture etc.

==================================================================================

<!--!React Virtual DOM-->

It is an object and it is a lightweight clone of real dom.

1. In the initial render =====>  jsx will be converted to javascript by using babel engine.---> based on this, one virtual dom will be created---> based on virtual dom, real(actual) dom will be created ----> based on real dom, ui will be painted.

2. when component under any changes like props, state got updated then =====>

jsx will be converted to js using babel engine and new virtual dom will be created.  ==> old virtual will be compared to new virtual dom and this proccess is called DIFFING. =======> 

based on the comparision, real(actual) dom will updated and this updating process is called RECONSILATION. ====>

previously this process is synchronous, after react 16 update we have fiber engine for do the same thing in asynchronous.

==================================================================================================================================

<!--!Hooks-->

Hooks are functions which is used to add extra features to function based component.

Common hooks in react:
----------------------
useState,useRef,useEffect,useLayout,useInsertionEffect,useContext,useReducer,useMemo,useCallBack,useNavigate

===============================================================================================================

<!--!State-->

 It is a dynamic data which belongs to component i.e. it will change over time whenever it will change rerender the component.
rerender means: recalled the component with the updated  state value.

We can create state in two ways:
--------------------------------
1.class based component ===> it has own state. here state is an object. we can access the state using this.state
                    to update the state we need to use this.setState().

2.function based component ===> it does not have  own state. to create state we need to use one hook called useState.

useState() ===> it is a function, it will accept one argument. i.e. current state value. here state can be any datatype.
    it will return two elements: 1.currentState  2.setStateFunction.

Key characteristics:
---------------------
1. it is mutable
2.State should be updated through setState() only
3. setState should be called inside dom events or life cycle method.
4.useState() should be called on top of component.It should be not inside any block or component.



<!--!useRef>
=============================================
It is used to store data without causing rerenders.but primarily used for accessing real dom elelments.
returnType ===> object. data will be store inside current property.  

<!--!Controlled forms>
=============================================
if form data  handled by state it is called controlled forms.
Name of input fields shpuld be same as state property key
VALUE should be given from state
name is used for taking value from input field to state value is used for state to input field 

<!--!UnControlled Forms>
===========================
if data is handled by useRef is called as uncontrolled forms, here data will be taken from actual dom.

======================================================================================================
<!--! useReducer--> 

it is alternative for state to handle complex logic in state.

======================================================================================================================

useEffect: it is used to handle side effects of react.
-----------

Side effects:
-------------
1.dom events   2. timer functions     3. fetch      4. promise

It is also used to achieve life cycle methods in function based components:
1. mounting stage  =====> useEffect(()=>{},[])
2.unMounting stage ======> useEffect(()=>{

  return ()=>{}
},[])


3.updating stage  ===> useEffect(()=>{},[state])

======================================================================================================================

Optimization Technique:(memorization)
======================================================================================================================
1. memo ----> it will avoid unnecessary rerender of child component, if child component will be under any changes then only it will re-render.

2.useMemo ===> it will avoid unnecessary recalculation.

3. useCallback ===> it will avoid re creation of function.


==================================================================================================================================


<!--!LifeCycle methods-->
these are special methods in react class based class components, which runs at difference stages of component's life.There are 3 phases:

1.mounting == > whenever component added to dom tree is known as mounting stage. In mounting stage, four important methods:

   a.constructor: this will run only in mounting stage.it is used to define state.

   b. static getDerivedStateFromProps() : this will run in mounting as well as updating phase.generally used to change the state based on props.

   c.render() ==> this will run mounting as well as updating phase. we acn write jsx here. ui will be changed based on this one.

   d.componentDidMount() ==> once the component is mounted, then this part of code will be executed.used for API, fetch, timer functions, promise handling.


2.updating ==> whenever component under any changes by using state or props by using state or props these methods will be called.
   a. static getDerivedStateFromProps(): same explanation
   b.shouldComponentUpdate() : it will return boolean values. if it is true then component will update otherwise component will not update.
   c.render(): same explanation.
   d.getSnapshotBeforeUpdate(): it will trigger just before the update. generally for layout style we can use this method.
   e.componentDidUpdate(): after component is update it will be triggered.generally used for fetch updates,dom events updates, timerUpdates.


3.unmounting: ==> when component removed from dom it will be triggered.
  a. componentWillUnmount(): ===> used for clearIntervals,removing event from dom, all the cleanup work will be done in unmounting stage.

  =============================================================================================================================

  .useEffect: it is used to handle sideEffects of react and also used for achieving life cycle methods in function based component.

  side effects: Dom events, fetch, setTimeout, setInterval all these are side effects.

  LifeCycleMethods: 
  a. componentDidMount: ==> we can mimic the same method in function based component by using useEfffectlike below:
  syntax : useEffect((=>{},[]))

  for unmount: useEffect(()=>{
    return ()=>{

    }
  },[])

  for update: useEffect(()=>{},[state1,state2])

  Note: useEffect will be called after ui is painted on screen. it will take two arguments: callback back function and dependency array.

  ====================================================================================================================


<!--!UseLayoutEffect!>:
It will be executed before ui painted on the screen and after actual dom is updated.
It is used to handle synchronous code. if any time heavy task is there it will block the execution.
It is used for fixing scroll position and also for animation.

<!--!UseInsertionEffect>
it will be executed before actual dom is updated.it is also synchronous execution.
it is used to add css from js.

Syntax : same syntax for useLayoutEffect, useEffect and useInsertionEffect

useEffect(()=>{},[])
useLayouteffect(()=>{},[])
useInsertionEffect(()=>{},[])

<!--!Memorization>
It is an optimization technique in react to avoid unnecessary rerendering and recalculation by remembering previous value(cache) when input not changes.

In react we can achieve in 3 ways:
1. memo() ==> it is high order component it will accept component as an argumemnt.
it will avoid unnecessary re-rendering of child component, if props change, it will rerender the component.
 syntax: 
   let Child=memo((props)=>{
   return <div></div>
   })


   2.useMemo ===> it will avoid unnecessary repeated call of function and redpoing heavy calculation.
   syntax:
   let result = useMemo(()=>{
   return add(10,5)
   },[])

   3.useCallBack() ==> it will avoid unnecessary recreation of function.


   <!--!Context!>  ===>
   It is hook and it is an alternative for props, it is used to transfer the data by using context, it will avoid props drilling.

   It has 3 steps:
     1. Create Context ====> we can create context by using createContext(), it will return object.
            syntax: export let myContext = createContext()

     2. Provide Context ===> In that object we have one componentprovided by using we need to provide the context
     and it has one important attribute "value"and in that we have to pass the data.

           syntax: 
     3.Consume the context ===> Here, we have to use the useContext(). in this method we have to pass the object which is created by createContext().