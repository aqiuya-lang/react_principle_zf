import {  Avatar, Modal } from 'antd'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { useEffect, useRef } from 'react'

const SetAvatarModal = () => {
  console.log('刷新---SetAvatarModal')
  const foucsFirstDefaultAvatarRef = useRef(null)


  useEffect(() => {
    console.log('myRef', foucsFirstDefaultAvatarRef)
    console.log('myRef', foucsFirstDefaultAvatarRef.current)
    setTimeout(() => {
      console.log('ref after 0ms:', foucsFirstDefaultAvatarRef.current)
    }, 0)
  }, [])

  const modal = useModal()
  const handleOnOk = () => {
    console.log('ok')
    modal.remove()
  }
  const handleOnCancel = () => {
    console.log('cancel')
    modal.remove()
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
               ref={index===0?foucsFirstDefaultAvatarRef: null}
                className=" w-[66px] h-[66px] flex justify-center items-center focus:border border-[#FF8910] rounded-[33px] cursor-pointer"
              >
                <Avatar size={60} src={`/images/avatar/default_avatar${index + 1}.png`} />
              </div>
            ))}
          </div>
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
