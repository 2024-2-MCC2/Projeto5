import React from 'react';
import styled from 'styled-components';
import { MdOutlineEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";


const Contatos = styled.div`    
  padding: 1.5  em;
  background-color: #fff;
`;

const ContatoTitle = styled.h1`
  text-align:center;
  font-weight: 700;
  font-size: 50px;
  color: #ED9B13;
  padding: 50px;
  margin-top: 0px;
  text-transform: uppercase;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`;

const Containerform = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Map = styled.iframe`
  width: 100%;
  max-width: 458px;
  height: 398px;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 450px;
  background-color: #ED9B13;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
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
  background: #1f1f1f;
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

  &:hover {
    background-color: #ddd;
  }
`;
const FormContatoContainer = styled.div`
  display: flex;
  gap: 2.5em;
  justify-content: center;
  align-items: center;
  margin: 65px auto 40px;
`

const TelefoneContainer = styled.a`
  color: #ED9B13;
  font-size: 20px;
  font-weight: bold;
`


const EmailContainer = styled.a`
  color:#ED9B13;
  font-size: 20px;
  font-weight: bold;
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

function Contact() {
  return (
    <Contatos>
      <ContatoTitle>Contato</ContatoTitle>

      <Containerform>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6359744187903!2d-46.646216025419726!3d-23.617384863651285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a45267434d7%3A0x92f3ff71cf19356f!2sAv.%20Jos%C3%A9%20Maria%20Whitaker%2C%202000%20-%20Planalto%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004057-000!5e0!3m2!1spt-BR!2sbr!4v1727788289544!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <Form onSubmit={handleSubmit}>
          <FormTitle>Deixe uma mensagem</FormTitle>

          <InputForm>
            <IoMdPerson />
            <Input type="text" name="name" placeholder="Nome" required />
          </InputForm>

          <InputForm>
            <MdOutlineEmail />
            <Input type="email" name="email" placeholder="E-mail" required />
          </InputForm>

          <InputForm>
            <SiMinutemailer />
            <Input name="message" placeholder="Mensagem" required />
          </InputForm>

          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </Containerform>

      <FormContatoContainer>
        <SectionTextContato>
          <TelefoneContainer href="tel:+551150780550">Telefone: +55 (11) 5078-0550</TelefoneContainer>
        </SectionTextContato>

        <SectionTextContato>
          <EmailContainer href="mailto:contato.ccpv@gmail.com">E-mail: contato.ccpv@gmail.com</EmailContainer>
        </SectionTextContato>
      </FormContatoContainer>
    </Contatos>
  );
}

export default Contact;
