import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/59667558?s=460&u=e01af2433828135672acf3e23e2f9c3645c6e5f6&v=4" alt="avatar"/>
                <div>
                    <strong>Hallex Abreu</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                wsncksncmdslçvmlçdsmlçvmldçsmvlçldçsmv<br />lçdsmvlmdsmvlçsddmvlçdsmvldmvdçlmvl
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;