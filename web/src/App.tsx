import { useState } from "react";

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return <h1>Hello World</h1>;
}

export default App;
