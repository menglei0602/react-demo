import React, { useRef, useEffect } from 'react';
// 高阶组件转发
function HOC(Component){
    class Wrap extends React.Component{
       render(){
          const { forwardedRef ,...otherprops  } = this.props
          return <Component ref={forwardedRef}  {...otherprops}  />
       }
    }
    return  React.forwardRef((props,ref)=> <Wrap forwardedRef={ref} {...props} /> ) 
  }
  class Index extends React.Component{
    refD = React.createRef(null);
    componentDidMount(){
        console.log('refD:', this.refD);
    }
    render(){
      return <div ref={this.refD}>hello,world</div>
    }
  }
  const HocIndex =  HOC(Index)
  // eslint-disable-next-line import/no-anonymous-default-export
  export default () => {
    let node = useRef(null)
    useEffect(()=>{
       console.log(node.current, node)  /* Index 组件实例  */ 
    },[node])
    return <div><HocIndex ref={(n) => node = n}  /></div>
  }
