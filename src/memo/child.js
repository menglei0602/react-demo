import React from 'react'

const Child = ({ defaultValue, value, onChange }) => {

    console.log('Child');
    return <>
        defaultValue: {defaultValue} - value: {value}
    </>;
}

function compare(prevProps, props) {
    return prevProps.value === props.value &&
        prevProps.onChange === props.onChange;
}

export default React.memo(Child, compare);