
const Modal = ({ isOpen, onClose, children }) => {
    return(
        <section className="modal" style={{ display: isOpen ? 'grid' : 'none'}}>
            <div className="modal-container">
                <button className="modalClose" onClick={onClose}>X</button>
                {children}
            </div>
        </section>
    )
}

export default Modal