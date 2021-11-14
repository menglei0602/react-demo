import React from 'react';

function FormItem(props){
    const { children , name  , handleChange , value , label  } = props
    const onChange = (value) => {
        /* 通知上一次value 已经改变 */
        handleChange(name,value)
    }
   return <div className='form' >
       <span className="label" >{ label }:</span>
       {
            React.isValidElement(children) && children.type.displayName === 'input' 
            ? React.cloneElement(children,{ onChange , value })
            : null
       }
   </div>    
}
FormItem.displayName = 'formItem'
export default FormItem;