import './App.css';
import counter from './assets/counter.png';
import Button from './components/Button';


function App() {

  return (
      <div>
        <div className='app'>
          <h1>Counter clicks</h1>
          <img 
          className='logo'
          src={counter}
          alt='Logo App' />
        </div>
        <div className='container'>
          <Button></Button>
        </div>
        </div>
  )
}

export default App
