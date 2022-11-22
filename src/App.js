import logo from './logo.svg';
import './App.css'; // default styles from reactApp
import MyClassComp from './MyClassComp';
import ExBuildingCompLayout from './ExBuildingCompLayout';
import ExMappingFunction from './ExMappingFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyClassComp />
        {/* <ExBuildingCompLayout /> */}
        {/* <ExMappingFunction /> */}
      </header>
    </div>
  );
}

export default App;
