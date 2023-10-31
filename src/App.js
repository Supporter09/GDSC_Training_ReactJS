// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import TaskCard from './components/taskCard';

function App() {
  const [text, setText] = useState('');
  const [taskList, setTaskList] = useState([{
    text: 'Learn React JS'
  }])
  const handleChangeText = (e) => {
    // console.log('new task:', e.target.value)
    setText(e.target.value);
  }

  const handleSubmit = () => {
    if (text != '') {
      setTaskList([...taskList, {
        text: text
      }]);
      setText('')
    }
  }

  const handleDelete = (index) => {
    let tmp = [...taskList]
    tmp.splice(index, 1);
    setTaskList(tmp)
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
            <TaskCard item={item} key={key} index={key} handleDelete={handleDelete} />
          )
        })}

      </div>
    </div>
  );
}

export default App;
