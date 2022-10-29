import './App.css';
import NavigationComponent from './CommonComponents/Navigation.tsx';

function App() {
  var buttons = [];
  return (
    <div className="App">
      <NavigationComponent buttons={buttons} title="Employees"/>
    </div>
  );
}

export default App;
