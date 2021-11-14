import { useState, useEffect } from 'react';
import ScrollView from './ScrollView';

// 有问题-todo
/* item 完全是单元项的渲染ui */
function Item({item}) {
    return  <div className="goods_item" >
        <img src={item.giftImage} className="item_image" />
        <div className="item_content" >
            <div className="goods_name" >
                {item.giftName}
            </div>
            <div className="hold_price" />
            <div className="new_price" >
                <div className="new_price" >
                    <div className="one view">
                        ¥ {item.price}
                    </div>
                </div>
            </div>
            <img className='go_share  go_text' />
        </div>
    </div>
}

export default () => { 
    const [ data , setData ] = useState({ list:[],page:0,pageCount:1  }) /* 记录列表数据 */
    /* 请求数据 */
    const getData = async ()=>{
        if(data.page === data.pageCount) return console.log('没有数据了～')
        const res = await fetch(data.page + 1)
        if(res.code === 0) setData({
            ...res,
            list:res.page === 1 ?  res.list : data.list.concat(res.list) 
        })
    } 
    /* 滚动到底部触发 */
    const handerScrolltolower = () => {
        console.log('scroll已经到底部')
        getData()
    }
    /* 初始化请求数据 */
    useEffect(()=>{
        getData()
    },[])
    return <ScrollView 
            data={ data }       /*  */
            component={ Item }  /* Item 渲染的单元组件 */
            scrolltolower={ handerScrolltolower } 
            scroll={()=>{}} 
        />
}
