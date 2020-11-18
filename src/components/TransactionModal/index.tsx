import React from 'react';
import { TransactionDataSource } from 'components/TransactionsTable';
import { ReactComponent as CloseX } from 'assets/svg/close.svg';
import {
  Modal,
  ModalSection,
  ModalButton,
  ModalList,
  ModalListItem,
  ScrollBodyLock,
} from 'components/TransactionModal/style';

type ModalProps = {
  handleClose: () => void;
  show: boolean;
  data: TransactionDataSource;
};

const TransactionModal = ({ handleClose, show, data }: ModalProps) => {
  return (
    <Modal showModal={show}>
      <ScrollBodyLock showModal={show} />
      <ModalSection>
        <ModalButton
          tabIndex={0}
          role="button"
          data-testid="close-button"
          onClick={() => handleClose()}
          onKeyDown={() => handleClose()}
        >
          <CloseX />
        </ModalButton>
        <ModalList>
          <ModalListItem>
            {'Id: '}
            <span>{data.key}</span>
          </ModalListItem>
          <ModalListItem>
            {'Scheme: '}
            <span>{data.scheme}</span>
          </ModalListItem>
          <ModalListItem>
            {'Last four numbers: '}
            <span>{data.lastNumbers}</span>
          </ModalListItem>
          <ModalListItem>
            {'Amount: '}
            <span>{data.amount}</span>
          </ModalListItem>
          <ModalListItem>
            {'Address: '}
            <span>{data.address}</span>
          </ModalListItem>
          <ModalListItem>
            {'City: '}
            <span>{data.city}</span>
          </ModalListItem>
          <ModalListItem>
            {'Postcode: '}
            <span>{data.postcode}</span>
          </ModalListItem>
        </ModalList>
      </ModalSection>
    </Modal>
  );
};

export default TransactionModal;
