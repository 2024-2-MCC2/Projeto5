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
  font-size: 30px;
  color: #ED9B13;
  padding-top: 50px;
  margin-top: 0px;
  text-transform: uppercase;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
`;

const Containerform = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-top: 50px;
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

const Junte = styled.h2`
  display: flex;
  justify-content: center;
  color: #ED9B13;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  font-size: 30px;
  margin-bottom: 55px;
`

const JunteContainer = styled.p`
  text-align: justify;
  margin : 30px 300px;
  color: #1f1f1f;
  font-size: 20px;
`
function handleSubmit(event) {
  event.preventDefault() 
  alert('Formulário enviado com sucesso!');

  document.getElementById('contactForm').reset()
}


function Contact() {
  function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    fetch('https://formsubmit.co/oliveira.antonio@edu.fecap.br', {
        method: 'POST',
        body: new FormData(document.getElementById('contactForm'))
    }).then(response => {
        if (response.ok) {
            alert("Formulário enviado com sucesso!");
            window.location.href = './index.html'; 
        } else {
            throw new Error('Erro ao enviar o formulário.');
        }
    }).catch(error => {
        console.error('Erro ao enviar o formulário:', error);
        alert("Ocorreu um erro ao enviar o formulário.");
    });

    return false; 
}
  return (
    <Contatos>
      <ContatoTitle>Contato</ContatoTitle>
        <Junte> Junte-se a nós na construção de um futuro melhor!</Junte>
        <JunteContainer>Na CCPV, acreditamos que juntos podemos fazer a diferença. Sua participação é essencial para transformarmos realidades e promovermos mudanças significativas em nossa comunidade.</JunteContainer>
        <JunteContainer>Seja como voluntário, doador ou parceiro, você pode contribuir de diversas maneiras e ser parte dessa missão. Com sua ajuda, podemos alcançar mais pessoas e gerar impactos reais. Venha fazer parte dessa causa e ajude-nos a criar um mundo mais inclusivo e solidário!</JunteContainer>

      <Containerform> 

        <Form onSubmit={handleSubmit} id='contactForm'>
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
