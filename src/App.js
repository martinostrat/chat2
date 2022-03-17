import './App.css';
import Input from './components/input/Input';
import Chat from './components/Chat/Chat';
import Bubble from './components/Bubble/Bubble';

function App() {
  return (
    <div className='bg'>
      <div className='logo'>VOCO</div>
          <div className='chatbox-wrapper'>
            <Chat/>
          </div>
    </div>
  );
}

export default App;
