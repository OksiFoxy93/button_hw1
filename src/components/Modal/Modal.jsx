import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import "./Modal.scss"

class Modal extends Component {
    constructor() {
        super();
        this.onOutsideModalClick = this.onOutsideModalClick.bind(this);
    }

    onModalBodyClick(ev) {
        ev.stopPropagation();
    }

    onOutsideModalClick() {
        this.props.handleCloseModal();
    }

    render() {
        const {header, closeButton, text, actions, handleCloseModal, modalType} = this.props;

        return (
            <div className="modal-wrapper" onClick={this.onOutsideModalClick}>
                <div className="modal" onClick={this.onModalBodyClick}>
                    <div className={`header ${modalType}`}>
                        <h3>{ header }</h3>
                        { closeButton && (
                            <FontAwesomeIcon className="close-icon" icon={ faXmark } onClick={handleCloseModal} />
                        )}
                    </div>
                    <p className="modal-text">{ text }</p>
                    <div className="modal-button-wrapper">
                        {actions}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;

Modal.defaultProps = {
    modalType: ""
};
