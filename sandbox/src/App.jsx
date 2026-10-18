import Card from "./components/Card";

export default function App() {
  let myObj = {
    username:"Yash",
    age:19
  }
  return (
    <>
      <Card obj = {myObj} />
    </>
  );
}
