import React from 'react';
import { TransactionDataSource } from 'components/TransactionsTable';
import { Modal, ModalSection } from 'components/TransactionModal/style';

type ModalProps = {
  handleClose: () => void;
  show: boolean;
  data: TransactionDataSource;
};

const TransactionModal = ({ handleClose, show, data }: ModalProps) => {
  return (
    <Modal showModal={show}>
      <ModalSection>
        <button type="button" onClick={handleClose}>
          close
        </button>
        <div>{data.key}</div>
        <div>{data.scheme}</div>
        <div>{data.lastNumbers}</div>
        <div>{data.amount}</div>
        <div>{data.address}</div>
        <div>{data.postcode}</div>
        <div>{data.city}</div>
      </ModalSection>
    </Modal>
  );
};

export default TransactionModal;
