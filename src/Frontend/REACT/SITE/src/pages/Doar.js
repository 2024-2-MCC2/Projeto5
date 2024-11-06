import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../Components/HeaderWithout'
import Doe from '../Components/Doe'
import Footer from '../Components/Footer'


const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:30px;
`

const LoginFormContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
`

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ed9b13;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
  &:hover {
    background-color: #0056b3;
  }
`

const LinkContainer = styled.a`
  display: flex;
  flex-direction:column;
  text-align: center;
  gap:10px;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

function Doar() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/cadastro');
  };

  return (
    <>
    <Header/>
	  <Doe/>
    <LoginPageContainer>
      <LoginFormContainer>
        <Title>Login</Title>
        <Input type="text" placeholder="Login" />
        <PasswordWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ToggleButton onClick={togglePasswordVisibility}>
            {showPassword ? 'Esconder' : 'Mostrar'}
          </ToggleButton>
        </PasswordWrapper>
        <Button type="submit" onClick={handleLoginClick}>Entrar</Button>
        <LinkContainer>
        <Link to = "/Contato">Esqueceu a senha?</Link>
        <Link to = "/">Fazer cadastro</Link>
        </LinkContainer>
      </LoginFormContainer>
    </LoginPageContainer>
    <Footer/>
    </>
  );
}

export default Doar;
