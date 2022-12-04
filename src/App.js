import { Component } from "react";
import './App.scss';
import { Button } from "./components/Botton";
import { Modal } from "./components/Modal";
import { modal } from "./config";

class App extends Component {
    state = {
        activeModal: "firstModal",
        isShowModal: false,
        firstModal: modal.firstModal,
        secondModal: modal.secondModal
    };

    handleClickFirstButton = () => {
        this.setState(prevState => ({
                ...prevState,
                activeModal: "firstModal",
                isShowModal: true
            })
        )
    };

    handleClickSecondButton = () => {
        this.setState(prevState => ({
            ...prevState,
            activeModal: "secondModal",
            isShowModal: true
        }))
    };

    handleCloseModal = () => {
        this.setState(prevState => ({
            ...prevState,
            isShowModal: false
        }))
    }

    render() {
        const { activeModal, isShowModal } = this.state;
        const {header, text, closeButton, firstBtnText,
            secondBtnText, firstBtnBgColor, secondBtnBgColor} = this.state[activeModal]

        return (
            <div className='wrapper'>
                <div className="button-wrapper">
                    <Button
                        text='Open first modal'
                        onClick={ this.handleClickFirstButton }
                        backgroundColor="#3ba18d"
                    />
                    <Button
                        text='Open second modal'
                        onClick={ this.handleClickSecondButton }
                        backgroundColor="#bd65c8"
                    />
                </div>

                {
                    isShowModal && <Modal
                        header={ header }
                        text={ text }
                        closeButton={ closeButton }
                        modalType={ activeModal }
                        handleCloseModal={ this.handleCloseModal }
                        actions={<><Button text={firstBtnText} onClick={ this.handleCloseModal } backgroundColor={firstBtnBgColor}/>
                            <Button text={secondBtnText} onClick={ this.handleCloseModal } backgroundColor={secondBtnBgColor}/></> }/>
                }

            </div>
        )
    }

}

export default App;
