import React, { useContext, createContext } from "react";
const ThemeContext = React.createContext(null) // 主题颜色Context

function ConsumerDemo(){
  const { color,background } = React.useContext(ThemeContext);
  console.log("render ConsumerDemo");
 return <div style={{ color,background } } >消费者</div> 
}
const Son = React.memo(()=> <ConsumerDemo />) // 子组件

const Header = () => {
  console.log("render Header");
  return <h1>② 第二种就是 React 本身对 React element 对象的缓存。React 每次执行 render 都会调用 createElement 形成新的 React element 对象，如果把 React element 缓存下来，下一次调和更新时候，就会跳过该 React element 对应 fiber 的更新。<a href='https://juejin.cn/book/6945998773818490884/section/6957723551818317862'>点击</a></h1>;
};

const ThemeProvider = ThemeContext.Provider //提供者
export default function ProviderDemo(){
 const [ contextValue , setContextValue ] = React.useState({  color:'#ccc', background:'pink' })
 return <div>
     <ThemeProvider value={ contextValue } >
        {/* {React.useMemo(() => <Header />, [] )} */}
        <Header />
        <Son />
     </ThemeProvider>
     <button onClick={ ()=> setContextValue({ color:'#fff' , background:'blue' })  } >切换主题</button>
 </div>
}