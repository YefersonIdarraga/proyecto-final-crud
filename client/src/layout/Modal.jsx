
const Modal = ({ isOpen, onClose, children }) => {
    return(
        <section className="modal" style={{ display: isOpen ? 'grid' : 'none'}}>
            <div className="modal-container">
                <button className="modalClose" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
                {children}
            </div>
        </section>
    )
}

export default Modal