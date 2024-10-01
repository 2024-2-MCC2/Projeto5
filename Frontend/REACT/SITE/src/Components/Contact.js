import React from 'react'; 
import styled from 'styled-components'; 
import { MdOutlineEmail } from "react-icons/md"; 
import { SiMinutemailer } from "react-icons/si"; 
import { IoMdPerson } from "react-icons/io";


const Contatos = styled.div`    
  padding: 1.5rem;
  margin-top: 50px;
  background-color: #fff;
`;

const Contatoh1 = styled.h1`
  text-align: center;
  color: #ED9B13;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Containerform = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* gap: 2rem; */
  margin-bottom: 20px;
`;

const Map = styled.iframe`
  width: 100%;
  max-width: 458px;
  height: 398px;
  border: 0;
`;

const Form = styled.form`
  width: 100%;
  max-width: 450px;
  background-color: #ED9B13;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h3`
  text-align: center;
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const InputForm = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: #1f1f1f;
  border-radius: 5px;
  margin-bottom: 0.75rem;
  color: #fff;

  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: #000;
  border: none;
  color: #fff;
  border-radius: 5px;
  outline: none;

  &::placeholder {
    color: #ccc;
  }
`;


const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  // Altera a cor de fundo quando o botão é focado ou clicado.
  &:hover {
    background-color: #ddd;
  }
`;
const FormaContatoContainer = styled.div`
    background-color: #fff; 
    display: flex;
    justify-content: space-evenly;
    margin: auto;
`

const TelefoneContainer = styled.h1`
    color: #ED9B13;
`
const NumeroTelefone = styled.p`
`

const EmailContainer = styled.h1`
    color:#ED9B13;
`

const NomeEmail = styled.p`
`

const SectionTextContato = styled.p`
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
`
// Função de manipulação de formulário
// Impede o comportamento padrão de recarregar a página ao enviar o formulário, exibindo uma mensagem de sucesso.
function handleSubmit(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página.
  alert('Formulário enviado com sucesso!'); // Exibe uma mensagem de sucesso quando o formulário é enviado.
}

// Componente de Contato
function Contact() {
    return (
      <Contatos>
        {/* Título da seção de contato */}
        <Contatoh1>Contato</Contatoh1>
        
        {/* Container que agrupa o mapa e o formulário */}
        <Containerform>
          {/* Mapa do Google Maps embutido na página */}
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6359744187903!2d-46.646216025419726!3d-23.617384863651285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a45267434d7%3A0x92f3ff71cf19356f!2sAv.%20Jos%C3%A9%20Maria%20Whitaker%2C%202000%20-%20Planalto%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004057-000!5e0!3m2!1spt-BR!2sbr!4v1727788289544!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
  
          {/* Formulário de contato */}
          <Form onSubmit={handleSubmit}>
            <FormTitle>Deixe uma mensagem</FormTitle>
  
            {/* Campo para entrada do nome, com ícone de pessoa */}
            <InputForm>
              <IoMdPerson />
              <Input type="text" name="name" placeholder="Nome" required />
            </InputForm>
  
            {/* Campo para entrada de e-mail, com ícone de e-mail */}
            <InputForm>
              <MdOutlineEmail />
              <Input type="email" name="email" placeholder="E-mail" required />
            </InputForm>
  
            {/* Área de texto para mensagem, com ícone de mensagem */}
            <InputForm>
              <SiMinutemailer />
              <Input name="message" placeholder="Mensagem" required />
            </InputForm>
  
            {/* Botão para enviar o formulário */}
            <SubmitButton type="submit">Enviar</SubmitButton>
          </Form>
        </Containerform>
        <FormaContatoContainer>
            <SectionTextContato>
            <TelefoneContainer>Telefone</TelefoneContainer>
            <NumeroTelefone>11 5078-0550</NumeroTelefone>
            </SectionTextContato>

            <SectionTextContato>
            <EmailContainer>E-mail</EmailContainer>
            <NomeEmail>contato.ccpv@gmail.com</NomeEmail>
            </SectionTextContato>
        </FormaContatoContainer>
      </Contatos>
    );
  }
  
  export default Contact; // Exporta o componente para ser usado em outras partes do projeto.
  