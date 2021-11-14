import React, { useRef, useEffect } from 'react';
// 合并转发ref
// 表单组件
class Form extends React.Component{
    render(){
       return <div>表单</div>
    }
}
// index 组件
class Index extends React.Component{ 
    componentDidMount(){
        let { forwardRef } = this.props
        forwardRef.current={
            form:this.form,      // 给form组件实例 ，绑定给 ref form属性 
            index:this,          // 给index组件实例 ，绑定给 ref index属性 
            button:this.button,  // 给button dom 元素，绑定给 ref button属性 
        }
    }
    form = null
    button = null
    render(){
        return <div> 
          <button ref={(button)=> this.button = button }  >点击</button>
          <Form  ref={(form) => this.form = form }  />  
      </div>
    }
}
const ForwardRefIndex = React.forwardRef(( props,ref )=><Index  {...props} forwardRef={ref}  />);

// home 组件
export default function Home(){
    let node = useRef(null)
     useEffect(()=>{
         console.log(node)
     },[])
    return <ForwardRefIndex ref={node} />
}