const express = require('express');
const cors = require('cors');
const session = require('express-session'); // Adicione esta linha
const path = require('path');
const personagensRoutes = require('./routes/personagensRoutes');
const authRoutes = require('./routes/autenticarRoutes');
const app = express();

// Configuração de CORS para permitir requisições do frontend em localhost
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Importante para cookies de sessão funcionarem
}));

// Middleware para interpretar JSON
app.use(express.json());

// Configuração de sessão
app.use(session({
    secret: 'seuSegredoAqui', // Substitua por uma chave secreta segura
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: true,       // Necessário para HTTPS em produção
        sameSite: 'none'    // Necessário para que cookies funcionem entre domínios diferentes (Netlify e Azure)
    }
}));

// Rota para servir arquivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuração das rotas
app.use('/api/projetos', projetosRoutes);
app.use('/auth', authRoutes);

// Porta do servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
