import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"



const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

const FormGroup = styled.div`
  margin-bottom: 15px;
`

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`
const FileInput = styled.input`
  display: block;
  width:80%;
  padding: 15px;
  margin-bottom:10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  &:focus{
      border-color: #007bff;
  }
`

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
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

function CadastroForm() {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    foto: '',
  })

  const [erro, setErro] = useState('')

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErro('')
    alert('Formulário enviado com sucesso!')
    console.log(formData)
    navigate('/projetos')
  }

  return (
    <>
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro Projetos</Title>
        <FormGroup>
          <Label htmlFor="nome">Nome</Label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="descricao">Descrição</Label>
          <Input
            type="text"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
            />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="foto">Foto</Label>
          <FileInput
            type="file"
            name="foto"
            value={formData.foto}
            onChange={handleChange} 
            />
        </FormGroup>

        {erro && <ErrorText>{erro}</ErrorText>}

        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
    </>
  )
}


export default CadastroForm