import "./app.css";
import { Button } from 'antd'

import NiceModal from "@ebay/nice-modal-react";
import AddModal from "./components/addModal";
import indModal from "./components/indModal";
const App = () => {
  // const modal = useModal(MyAntdModal);
  //modal.show( { name: 'Nate' })
  const showAtndModal = () => {
    NiceModal.show(AddModal, { name: "Nate" });
  };
  const showIndModal = () => {
    NiceModal.show(indModal, { name: "Nate" });
  };
  return (
    <div className="app">
      <Button onClick={showAtndModal}>点击显示我的AddModal</Button>
      <Button onClick={showIndModal}>点击显示我的indModal</Button>
    </div>
  );
};

export default App;
