import React from 'react';
import '../../styles/modals/ContactModal.scss';
import { CloseIcon } from '../../assets/svgImages';

function ContactModal({ changeContactModal }) {

    // form options

    function sendMessage(e) {
        e.preventdefault();
        changeContactModal();
    };

    return (
        <div className="ContactModal">
            <div className="close_icon" onClick={() => changeContactModal()}><CloseIcon /></div>
            <form onSubmit={sendMessage} className="forms gap-4">
                <h1 className="title">Оставить заявку</h1>
                <input type="text" required className='input text pd-1' placeholder='Фамилия Имя' />
                <input type="number" required className='input text pd-1' placeholder='Номер телефона' />
                <div className="selection pd-1 input">
                    <select className='text'>
                        <option value="Направление">Направление</option>
                        <option value="Направление">Направление</option>
                        <option value="Направление">Направление</option>
                    </select>
                </div>
                <button type="submit" className='send_btn big-text scale-05'>Отправить</button>
            </form>
        </div>
    )
}

export default ContactModal
