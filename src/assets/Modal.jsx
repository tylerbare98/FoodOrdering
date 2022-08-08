import styles from "./Modal.module.css"
import {createPortal} from 'react-dom';
import Cart from "../components/Cart/Cart";

const Modal = (props) => {
    return createPortal(
        <section className={styles.modal} onClick={props.closeModal}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}> {/*prevents a click inside modal*/}
                <Cart closeModal={props.closeModal}
                      order={props.order}
                />
            </div>
        </section>
        , document.getElementById("modal")
    )
}

export default Modal;