import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [tilte, setTilte] = useState('');
    const [description, setDesc] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            tilte,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }                   
            })

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente');
        }
    }

    return (
        <div className="new-incident-conteiner">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Escreva o caso detalhadamente para encontrar um heroi para fazer isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={15} color="#E02141"/>
                        Voltar pra home
                    </Link>
                </section>

                <form onSubmit={ handleNewIncident }>
                    <input 
                        placeholder="Título do caso"
                        value={tilte}
                        onChange={e => setTilte(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDesc(e.target.value)}
                    />

                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}