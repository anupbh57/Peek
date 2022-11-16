import './App.css';
import Nav from './Layers/Nav';
import Left from './Layers/Left';
import Right from './Layers/Right';
import Center from './Layers/Center';

function App() {
    return (
        <div className="App">
            <Nav/>
          <div className='flex justify-between'>
            <Left className="basis-1/4"/> 
            <Center className="center"/>
            <Right className="basis-4/12"/> 
          </div>
        </div>
    );
}

export default App;
