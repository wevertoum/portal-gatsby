import React from 'react'
import './modal.scss';
import PropTypes from 'prop-types';

const Modal = ({
  visible, onClose, children, btn,
}) => {
  if (visible) {
    return (
      <div className="modal-main">
        <div className="svg-anim">
          {children}
        </div>

        {
          btn && (
            <button type="button" onClick={onClose}>
              fechar
            </button>
          )
        }
      </div>
    )
  } return <></>
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  btn: PropTypes.bool.isRequired,
};
export default Modal
