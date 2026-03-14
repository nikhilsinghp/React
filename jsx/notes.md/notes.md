<!--!Element--!>

In react elements are treated as object. It is the fundamental building block of creating user interface. 

We can create element in 2 ways in react:
1. React.createElement()
2. JSX

1. Reacr.createElement() ===> will accept 3 arguments: 
  a. elementType b. attributeObject  c. displaying content

Syntax==> 

React.createElement(elementType,{},displayingContent)
eg: React.createElement("h1",{id:"abc"},"I am header")


2.JSX ==> stands for JavaScript xml

It is another way to create element in React apart from react.createElement(elementName,AttributeObject,DisplayContent). react.createElement() does not allow html syntax.

JSX will create the element with the help of html synatx.

<!--!Create Element using JSX-->:
 <!--Create one element>

ReactDOM.createRoot(document.getElementById("root")).render(<h1>i am from react</h1>)

/* Create multiple element*/ 

ReactDOM.createRoot(document.getElementById("root")).render(<div>
    <h1>I am header 1</h1>
    <h1>I am header2</h1>
</div>)

<!--!Rule of JSX-->:
1. JSX should return one parent element. it will not accept multiple elements but we can create n number of elements inside the parent element.

2. In JSX all the element name should be in lowercase unlike html(where it will accept lowercase and uppercase).

3.All the attributes names of an element should be in camelCase.

4. All elements should be closed either by using another closing tag or  self closing tag i.e. "/" symbol inside the opening tag itself.

5. In JSX, some attributes anme has been changed for eg: class represent className
and for represent htmlFor.

