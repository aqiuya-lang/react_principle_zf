// import React from "react";
// import ReactDOM from "react-dom/client";

import React from "./handwrite/react";
import ReactDOM from "./handwrite/react-dom/client";


//函数式组件
// function JsxElement(props) {
//   return <div>我是函数式组件，{props.name}</div>;
// }
// const element1 = <JsxElement name="aqiuya" />;

//类组件，必继承父类React.Compoent,必须有render函数负责返回JSX
class ClassComponent extends React.Component{
  constructor(props) {//this.props = props
    super(props)
    //在内部会把收到的属性对象放在自己的实例上，以后可以通过this.props拿到
  }

  render() {
    return (<div>我是类组件，{this.props.name}</div>)
  }
}

const element2 = <ClassComponent name="aqiuya"/>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element2);
