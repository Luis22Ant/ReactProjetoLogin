import React, { useState, useEffect } from 'react';
import AuthService from '../Services/AuthService';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../LoginForm.module.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CadastroEdit = () => {
    const [formValues, setFormValues] = useState({
        Usuario: '',
        Senha: '',
        Tipo: '',
        CPF: '',
        DataNascimento: '',
    });

    // Obtenha o id dos parâmetros de rota
    const { id } = useParams();

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                // Use o id obtido dos parâmetros da rota
                const response = await AuthService.editarUsuario(id);

                // Atualize o estado com os dados do usuário
                setFormValues(response);
            } catch (error) {
                console.error('Erro ao buscar dados do usuário', error);
            }
        };

        fetchUsuario();
    }, [id]);

    const navigate = useNavigate();

    const botaoVoltar = () => {
        navigate('/tableUsuario');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await AuthService.editarUsuario(
                id,
                formValues.Usuario,
                formValues.Senha,
                formValues.Tipo,
                formValues.CPF,
                formValues.DataNascimento
            );

            console.log('Atualizado com sucesso', response);
            // Você pode adicionar lógica aqui, como redirecionar para outra página após a atualização bem-sucedida.
        } catch (error) {
            console.error('Erro na atualização', error);
            // Lógica para lidar com falhas na atualização, como exibir uma mensagem de erro.
        }
    };

    return (
        <div className={`container ${styles.teste}`} >
            <h1 style={{ textAlign: 'center' }}>Editar Usuário</h1>
            <form onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Usuário:</label>
                    <input type="text" className="form-control" name="Usuario" value={formValues.Usuario} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Senha:</label>
                    <input type="password" className="form-control" name="Senha" value={formValues.Senha} onChange={handleChange} />
                </div>
                <div className="col-md-12" style={{ display: 'flex' }}>
                    <div className="col-md-6">
                        <label className="form-label">CPF:</label>
                        <input type="text" className="form-control" name="CPF" value={formValues.CPF} onChange={handleChange} />
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                        <FontAwesomeIcon style={{ height: '10vh' }} icon={faUser} />
                    </div>
                </div>

                <div className="col-md-6" >
                    <label className="form-label">Data de Nascimento:</label>
                    <input type="text" className="form-control" placeholder='dd/mm/yyyy' name="DataNascimento" value={formValues.DataNascimento} onChange={handleChange} />
                </div>
                <div className="col-md-12" style={{ marginBottom: '2vh' }}>
                    <div className="col-md-6">
                        <label className="form-label"></label>
                        <select type="text" className="form-control" name="Tipo" value={formValues.Tipo} onChange={handleChange}>
                            <option value="">Tipo</option>
                            <option value="Admin">Admin</option>
                            <option value="Usuario">Usuário</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Confirmar
                </button>&nbsp;&nbsp;&nbsp;
                <button onClick={botaoVoltar} type="submit" className="btn btn-secondary">
                    Voltar
                </button>
            </form>
        </div>
    );
};

export default CadastroEdit;
