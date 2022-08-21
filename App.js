import Sidebar from './components/Sidebar';
import './App.css'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <Header/>
        </div>
    </div>
  );
}

export default App;
