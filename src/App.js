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
            <Left className="c-left"/> 
            <Center className="c-center"/>
            <Right className="c-right"/> 
          </div>
        </div>
    );
}

export default App;
