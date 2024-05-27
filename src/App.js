import logo from './logo.svg';
import './App.css';
import Basic from './lessons/basic';
import List from './lessons/list';
import PureFunction from './lessons/purefunction';
import ButtonWithClick from './lessons/ButtonWithClick';
import BasicState from './lessons/BasicState';


function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  const handleButtonClick = () => {
    console.log("Button clicked in App component!");
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Basic name={"this is props"}/>
        <List items={items}/>
        <PureFunction name={"pureFunction"}/> */}
        <ButtonWithClick onClick={handleButtonClick} />
        <BasicState/>
      </header>
    </div>
  );
}

export default App;
