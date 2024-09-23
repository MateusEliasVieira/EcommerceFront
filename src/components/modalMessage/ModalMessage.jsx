import "./css/ModalMessage.css";

const ModalMessage = (props) => {
    return (
        <div className={`div-modal-message ${props.showModalMessage ? 'active' : ''}`}>
            <div className="modal-content">
                <button className="btn btn-link" onClick={() => props.setShowModalMessage(false)}>X</button>
                <p>{props.message}</p>
            </div>
        </div>
    );
};

export default ModalMessage;
