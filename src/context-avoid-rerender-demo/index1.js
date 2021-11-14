import React, { useContext, createContext } from "react";
const ThemeContext = React.createContext(null) // 主题颜色Context

function ConsumerDemo(){
  const { color,background } = React.useContext(ThemeContext);
  console.log("render ConsumerDemo");
 return <div style={{ color,background } } >消费者</div> 
}
const Son = React.memo(()=> <ConsumerDemo />) // 子组件

const Header = React.memo(() => {
  console.log("render Header");
  return <h1>① 第一种就是利用 memo，pureComponent 对子组件 props 进行浅比较处理。<a href='https://juejin.cn/book/6945998773818490884/section/6957723551818317862'>点击</a></h1>;
});

const ThemeProvider = ThemeContext.Provider //提供者
export default function ProviderDemo(){
 const [ contextValue , setContextValue ] = React.useState({  color:'#ccc', background:'pink' })
 return <div>
     <ThemeProvider value={ contextValue } >

         <Header />
         <Son />
     </ThemeProvider>
     <button onClick={ ()=> setContextValue({ color:'#fff' , background:'blue' })  } >切换主题</button>
 </div>
}