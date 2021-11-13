import { Input, Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCaptain } from '../../redux/home-base/homeBase.action';

const CaptainModal = () => {
  const [name, setName] = useState('Captain');
  const dispatch = useDispatch();
  const isModalVisible = useSelector(
    (state: any) => state.homeBase.isModalVisible
  );

  const handleOk = () => {
    dispatch(setCaptain(name));
  };
  const handleCancel = () => {
    // another way of dispatching changes to reducer where we don't use an action creator
    dispatch({ type: 'SET_MODAL_VISIBLE', payload: false });
  };
  return (
    <Modal
      title="Captain's Name"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose={true}
    >
      <Input
        autoFocus
        type="text"
        onChange={(e: any) => setName(e.target.value)}
      ></Input>
    </Modal>
  );
};
export default CaptainModal;
