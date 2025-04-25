import {  Avatar, Modal, Upload } from 'antd'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import {useState } from 'react'
import IconFont from '../../utils/icont'
import './index.css'
const SetAvatarModal = () => {
  console.log('刷新---SetAvatarModal')
  const [nowFocusAvatar, setNowFocusAvatar] = useState(0)
  const modal = useModal()
  const handleOnOk = () => {
    //这里要用到nowFocusAvatar
    console.log("nowFocusAvatar")
    console.log('ok')
    modal.remove()
  }
  const handleOnCancel = () => {
    console.log('cancel')
    modal.remove()
  }

  const changeDefaultAvatar = (index) => {
    console.log(index)
    setNowFocusAvatar(index)
  }

  const beforeUpload = (file) => {
    console.log(file)
    console.log("beforeUpload")
    return true
  }
  const customRequest = () => {
    console.log("customRequest")
    // setNowFocusAvatar(-1)
  }

  const ModalContent = () => {
    console.log('刷新-----ModalContent')
  
    return (
      <>
        <div>
          <div>默认头像</div>
          <div className="w-[100%] h-[1px] mt-[10px] mb-[7px] bg-[#ECEEF2]"></div>
          <div className="flex justify-between mb-[17px]">
            {new Array(5).fill(0).map((_, index) => (
              <div
              key={index}
              className={`${index === nowFocusAvatar ? 'showborder' : ''} w-[66px] h-[66px] flex justify-center items-center rounded-[33px] cursor-pointer`}
              onClick={() => changeDefaultAvatar(index)}
              >
                <Avatar size={60} src={`/logo192.png`} />
              </div>
            ))}
          </div>
          <div>自定义头像</div>
            <Upload
            beforeUpload={beforeUpload}
            customRequest={customRequest}
           
            >
               <div className='w-[60px] h-[60px] flex justify-center items-center rounded-[30px] cursor-pointer border border-[#bab9b7] '
               onClick={() => changeDefaultAvatar(-1)}
             >
               <IconFont  type="icon-baobiao-"/>
        </div>
            </Upload>
          </div>
      </>
    )
  }
  return (
    <Modal open={modal.visible} width={404} onOk={handleOnOk} onCancel={handleOnCancel} destroyOnClose={true}>
      <ModalContent />
    </Modal>
  )
}

export default NiceModal.create(SetAvatarModal)
