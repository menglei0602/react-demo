import Child from './child';
import { useState } from 'react';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [defaultValue, setDefaultValue] = useState(0);
    const [value, setValue] = useState(0);

    return <div>
        <button onClick={() => setDefaultValue(defaultValue + 1)}>改变defaultValue</button>
        <button onClick={() => setValue(value + 1)}>改变value</button>
        <Child defaultValue={defaultValue} value={value}></Child>
    </div>
};