import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h2", {}, "Hi I am REACT!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading) ---- rendering react element

// const headingJsx = <h1>Hi I am React using JSX</h1>;
// const button = <button>Submit</button>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <div>
//     <h1>I am React using JSX</h1>
//     <button>Submit</button>
//   </div>
// );

//React Component

// //React Funtional Component
// const Heading = () => {
//   return <h1>I am Heading from react functional component</h1>;
// };

// // const Title = () => {
// //   return <h2>I am second component</h2>;
// // };

// //component composition
// const Title = () => {
//   <Heading />; //---nesting one component into another
//   return <h2>I am second component</h2>;
// };

// //rendering functional component
// root.render(
//   <>
//     <Heading />
//     <Title />
//     {Title()}
//   </>
// );

//element inside component

// const title = <h1>I am element</h1>;

// const Heading = () => {
//   return (
//     <div>
//       {title}
//       <h2>I am component</h2>
//     </div>
//   );
// };

// root.render(<Heading />);
