import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';

// ① 类组件 ref

// 子组件
function Son (props,ref) {
    const inputRef = useRef(null)
    const [ inputValue , setInputValue ] = useState('')
    // useImperativeHandle(ref,()=>{
    //    const handleRefs = {
    //        onFocus(){              /* 声明方法用于聚焦input框 */
    //           inputRef.current.focus()
    //        },
    //        onChangeValue(value){   /* 声明方法用于改变input的值 */
    //            setInputValue(value)
    //        }
    //    }
    //    return handleRefs
    // },[])
    return <div>
        <input placeholder="请输入内容"  ref={ref}  value={inputValue} />
    </div>
}

const ForwarSon = forwardRef(Son)
// 父组件
class Index extends React.Component{
    // cur = null
    cur = React.createRef(null);
    handerClick = () => {
       const { onFocus , onChangeValue } =this.cur
    //    onFocus() // 让子组件的输入框获取焦点
       this.cur.current.focus();
       console.log(this.cur.current);
    //    onChangeValue('let us learn React!') // 让子组件input  
    }
    render(){
        return <div style={{ marginTop:'50px' }} >
            <ForwarSon ref={this.cur} />
            {/* <ForwarSon ref={cur => (this.cur = cur)} /> */}
            <button onClick={this.handerClick.bind(this)} >操控子组件</button>
        </div>
    }
}
export default Index;