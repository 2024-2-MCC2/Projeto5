const db = require('../config/db')

exports.createProjeto = async(req, res) =>{
    const {nome, descricao} = req.body
    const foto = req.file.filename
    try{
        const [result] = await db.query('INSERT INTO personagens (nome, descricao, foto) VALUES(?, ?, ?)', [nome, descricao, foto])
        res.status(201).send(`Projeto criado com ID: ${result.insertId}`)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.getAllProjeto = async(req, res) =>{
    try{
        const [projetos] = await db.query('SELECT * FROM projetos')
        res.status(200).json(projetos)
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.getProjetoByID = async(req, res) =>{
    const id = req.params.id
    try{
        const [projetos] = await db.query('SELECT * FROM projetos WHERE id =?', [id])
        if(projetos.length >0){
            res.status(200).json(projetos[0])
        } else {
            res.status(404).send('Projeto não encontrado')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}
exports.updateProjeto = async(req, res) =>{
    const id = req.params.id
    const {nome, descricao} = req.body
    const foto = req.file ? req.file.filename : null    
    try{
        const fields = []
        const values = []
        if(nome){
            fields.push('nome = ?')
            values.push(nome)
        }
        if(descricao){
            fields.push('descricao = ?')
            values.push(descricao)
        }
        if(foto){
            fields.push('foto = ?')
            values.push(foto)
        }
        if(fields.length === 0){
            return res.status(400).send('Nenhum campo para atualizar')
        }
        values.push(id)
        const query = `UPDATE projetos SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await db.query(query, values)
        if(result.affectedRows > 0){
            res.status(200).send('Projeto atualizado com sucesso')
        } else {
            res.status(404).send('Projeto não encontrado')
        }
    } catch (err){
        console.error('Erro ao atualizar o projeto: ', err)
        res.status(500).send(err.message)
    }
}
exports.deleteProjeto = async(req, res) =>{
    const id = req.params.id    
    try{
        const [result] = await db.query('DELETE FROM projetos WHERE id = ?', [id])
        if(result.affectedRows > 0){
            res.status(200).send('Projeto deletado com sucesso')
        } else {
            res.status(404).send('Projeto não encontrado')
        }
    } catch (err){
        console.error(err)
        res.status(500).send(err.message)
    }
}