
import { useState } from 'react';

function TaskCard({item, index, handleDelete}) {
    // console.log(item)
    const [value, setValue] = useState(item.text);

    const handleCheckboxChange = (e) => {
        console.log('value of checkbox : ', e.target.checked);
        handleDelete(index)
    }

    const handleChangeText = (e) => {
        console.log('new task:', e.target.value)
        setValue(e.target.value);
      }

    return (
        <div className='taskCard' >
            <input className='checkbox' type='checkbox' index={item.index} onChange={handleCheckboxChange} />
            <input className='inputTaskCard' value={value} type='text'  onChange={handleChangeText} />
        </div>
    );
}

export default TaskCard;
