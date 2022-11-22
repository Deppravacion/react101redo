import logo from './logo.svg';
// import './App.css'; // default styles from reactApp
import MyClassComp from './MyClassComp';
import ExBuildingCompLayout from './ExBuildingCompLayout';
import ExMappingFunction from './ExMappingFunction';
import ExCompProperties from './ExCompProperties';

function App() {

  const data = {
    image: "https://i.pinimg.com/originals/57/7e/41/577e41cc9210ed46a578fce923a5f51c.jpg",
    cardTitle: "Harry Mack",
    cardDescription: "Multi-talented artist and rapper Harry Mack is best known for his unique, jaw-dropping visual freestyle rapping. He first came to fame when his Venice Beach Freestyle went viral, which propelled him to opportunities alongside the likes of Kendrick Lamar, Joey Bada$$, Ellen DeGeneres, Complex Music and RedBull Music.",
    button: {
      url: "https://www.harrymackofficial.com/",
      label: "Visit Website"
    }
  };




  return (
    <div className="App">
      <header className="App-header">
        {/* <MyClassComp propName="thisProp is propName" anotherProp="this is anotherProp sukkaFish"/> */}
        
        {/* <ExBuildingCompLayout /> */}
        {/* <ExMappingFunction /> */}
        {/* <ExCompProperties 
        title="Harry Mack"
        image="https://i.pinimg.com/originals/57/7e/41/577e41cc9210ed46a578fce923a5f51c.jpg"
        description="lti-talented artist and rapper Harry Mack "
        /> */}
    
        <ExCompProperties info={data} />
      </header>
    </div>
  );
}

export default App;
