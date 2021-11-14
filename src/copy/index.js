import React from 'react';
import Child from './child';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), nameID: 1};
      this.testdata = 1; // state中数据变化时才能更新到页面
    }
    componentWillUpdate(prevProps, preState) {
      // 典型用法（不要忘记比较 props）：
      console.log('1', this.state.date, preState.date);
      if (this.state.date !== preState.date) {
        console.log('2', this.state.date, preState.date);
        this.setState({nameID: this.state.nameID+1});
      }
    }
    
    onKeyUp = (e) => {
      const { value } = e.target;
      console.log('5: ', value, e);
      this.setState({nameID: value});
    };

    onChange = (e) => {
      const { value } = e.target;
      console.log('3: ', value, e);
      this.setState({nameID: value});
    };
    
    onPaste = () => {
      const content = window.getSelection().toString();
      console.log('4: ', content);
      this.setState({nameID: content});
    };

    render() {
      return (
        <div>
          <button onClick={() => {
            // this.testdata=this.testdata+1;
            this.setState({date: new Date()});
          }}>点击更改</button>
          <Child testdata={this.testdata}></Child>
          <h1>Hello, world!--{this.testdata}</h1>
          <h1>nameID:{this.state.nameID}</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <input value={this.state.nameID} onChange={this.onChange} onKeyUp={this.onKeyUp} />
        </div>
      );
    }
  }