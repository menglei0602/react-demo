import { memo } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
const Child = (props) => {
    const { otherProps, onClick } = props;
    debugger;

    let b, c;
    if (otherProps) {
        b = otherProps.b;
        // c = otherProps.a.c;
    }
    console.log('Child');
    return <>
        {otherProps ? <div onClick={onClick}>
            c:{c}---b:{b}
        </div> : ''}
    </>
};
// export default Child;
export default memo(Child);