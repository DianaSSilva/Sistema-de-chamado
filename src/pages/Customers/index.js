import { FiUser } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { useState } from "react";

import { db } from "../../services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

import { toast } from "react-toastify";

export default function Customers() {

    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleRegister(e) {
        e.preventDefault();

        if (nome !== '' && cnpj !== '' && endereco !== '') {
            await addDoc(collection(db, 'customers'), {
                nomefantasia: nome,
                cnpj: cnpj,
                endereco: endereco
            })

            // limpar os dados do site e voltar para vazio 
                .then(() => {
                    setNome('')
                    setCnpj('')
                    setEndereco('')
                    toast.success("Empresa registrada!")
                })
                .catch((error) => {
                    console.log(error);
                    toast.error("Erro ao fazer o cadastro.")
                })

        }else{
            toast.error("Preencha todos os campos!")
        }

    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25} />

                </Title>

                <div className="'container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Nome fantasia</label>
                        <input
                            type='text'
                            placeholder="Nome da empresa"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <label>CNPJ</label>
                        <input
                            type='test'
                            placeholder="digite o CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />

                        <label>Endereço</label>
                        <input
                            type='test'
                            placeholder="Endereçoda empresa"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />

                        <button type="submit">
                            Cadastrar
                        </button>

                    </form>

                </div>

            </div>
        </div>
    )
}