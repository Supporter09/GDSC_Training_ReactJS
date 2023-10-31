// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [taskList, setTaskList] = useState([{
    index: 0,
    text: 'Learn React JS'
  }])
  const handleChangeText = (e) => {
    console.log('new task:', e.target.value)
    setText(e.target.value);
  }

  const handleSubmit = () => {
    if (text != '') {
      setTaskList([...taskList, text]);
      setText('')
    }
  }

  const handleCheckboxChange = (e) => {
    console.log('value of checkbox : ', e.target.checked);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='formTask'>
        <input className='inputTask' value={text} type='text' placeholder='Enter your new task' onChange={handleChangeText} />
        <button className="button-6" role="button" onClick={handleSubmit} >Add New Task</button>
      </div>

      <div className='taskList'>
        {taskList.map((item, key) => {
          return (
            <div className='taskCard' key={key} >
              <input className='checkbox' type='checkbox' index={item.index} onChange={handleCheckboxChange} />
              <h2>
                {item.text}
              </h2>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
