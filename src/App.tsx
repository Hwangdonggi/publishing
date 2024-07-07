import AddButton from "./componets/atom/AddButton";
import TodoItem from "./componets/molecule/TodoItem";
import Body from "./componets/organism/Body";
import Head from "./componets/organism/Head";
function App() {
  return (
    <div className="w-screen mx-auto max-w-lg">
      <Head />
      <Body />
    </div>
  );
}

export default App;
