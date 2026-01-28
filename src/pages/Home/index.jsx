import { useRef } from "react"
import api from "../../services/api.js"
import { useNavigate } from "react-router-dom"

import { Title, Container, Form, ContainerInput, Input, InputLabel } from "./styles"

import Button from "../../components/Button/index.jsx"
import TopBackground from "../../components/TopBackground/index.jsx"


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  
  const navigate = useNavigate()

  async function registerNewUser() {
    const name = inputName.current.value.trim();
    const email = inputEmail.current.value.trim();
    const age = parseInt(inputAge.current.value);

    if (!name || !email || !age) {
      alert('Todos os campos são obrigatórios');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Email inválido');
      return;
    }

    try {
      await api.post("/usuarios", {
        email,
        age,
        name
      });
      inputName.current.value = '';
      inputEmail.current.value = '';
      inputAge.current.value = '';
      navigate("/lista-de-usuarios");
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário');
    }
  }


  return (
    <Container>

      <TopBackground/>

      <Form>
        <Title>Cadastrar Usuários </Title>

        <ContainerInput>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome Do Usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>

        </ContainerInput>

        <div style={{ width: "100%" }} >
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-Mail do Usuário" ref={inputEmail} />
        </div>



        <Button type="button" onClick={registerNewUser} theme="primary" >Cadastrar Usuário</Button>
      </Form>

        <Button type="button" onClick={()=>navigate("/lista-de-usuarios")} >Ver Lista De Usuários</Button>

    </Container>
  )
}

export default Home

/* Exportar Padrão (export default) indica que este é o principal valor exportado por este módulo.
  Apenas Exporta Uma Coisa So Por Arquivo

*/