import { useState, useEffect, useMemo } from 'react';
import Child from './child';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    let [values, setValues] = useState(1);
    const handleClick = () => {
        console.log('1');
    };
    const useInfo = useMemo(() => {
        return { b: values}
    }, [values]);

    useEffect(() => {
        setTimeout(() => {
            // values.b = 1;
            // setValues(values);
            setValues(2);
        }, 2000);
    }, []);
    return <>
        <Child onClick={ () => {
        console.log('1');
    }} otherProps={useInfo} />
    </>;
}