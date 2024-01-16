import React from "react";
function Note3() {
  return (
    <div>
      {/* below way works but is not optimal */}
      {/* <CardWrapper innerComponent={<TextComponent />}></CardWrapper> */}
      {/* the right way to do it si as follows  */}
      <CardWrapper>we write anything here</CardWrapper>
    </div>
  );
}

// the below two are two different components
function TextComponent() {
  return (
    <div>
      <p>any</p>
    </div>
  );
}

function TextComponent2() {
  return (
    <div>
      <p>any 2</p>
    </div>
  );
}

// function CardWrapper({ innerComponent }) {
//   return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
// }
// you can access everything writter between the closing and opening tags with children variable
function CardWrapper({ children }) {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}

export default Note3;
