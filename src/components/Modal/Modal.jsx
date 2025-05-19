import React from 'react';
import cl from './Modal.module.css'
function Modal({children,visible,setVisible}) {

    const rootClassName = [cl.Modal]
    if(visible){
        rootClassName.push(cl.active);
    }

    return (
        <div className={rootClassName.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.ModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;