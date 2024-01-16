import React, { useState } from "react";

function Note1() {
  const [name, setName] = useState("Hariom");
  const changeName = () => {
    setName(Math.random());
  };
  // if any state in this function changes so all the child components will also get re rendered
  // therefore all of them are being rendered again and again
  // to prevent these re-renders, we can do one of the following things
  // 1. push the state down, sperate a function to update the name
  // 2. Use memoization -> React.memo()
  return (
    <div>
      {/* <HeaderWithButton /> */}
      {/* 2nd way */}
      <button onClick={changeName}>click here to change name</button>
      <Header title={name}></Header>
      <Header title="Hariom"></Header>
      <Header title="Hariom"></Header>
      <Header title="Hariom"></Header>
      <Header title="Hariom"></Header>
      <Header title="Hariom"></Header>
      <Header title="Hariom"></Header>
    </div>
  );
}

// function HeaderWithButton() {
//   // after passing all the states here, you will notice that only the button and the top header rerenders
//   const [name, setName] = useState("Hariom");
//   const changeName = () => {
//     setName(Math.random());
//   };
//   return (
//     <div>
//       <button onClick={changeName}>Click here to change name</button>
//       <Header title={name}></Header>
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>My name is {title}</div>;
// }

// we must memoize this Header function
const Header = React.memo(({ title }) => {
  return <div>My name is {title}</div>;
});

export default Note1;
