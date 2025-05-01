import "./app.css";
import { Button } from 'antd'
import NiceModal from "@ebay/nice-modal-react";
import AddModal from "./components/addModal";
import indModal from "./components/indModal";
const App = () => {
  
  const showAtndModal = () => {
    NiceModal.show(AddModal, { name: "Nate" });
  };
  const showIndModal = () => {
    NiceModal.show(indModal, { name: "Nate" });
  };
  return (
    <div className="app">
      <Button onClick={showAtndModal}>父组件渲染引起子组件重新渲染问题</Button>
      <Button onClick={showIndModal}>Modal中获取ref问题</Button>
    </div>
  );
};

export default App;

