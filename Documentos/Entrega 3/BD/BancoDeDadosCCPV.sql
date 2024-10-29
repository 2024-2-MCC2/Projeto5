create database CCPV;
use CCPV;

CREATE TABLE Projetos (
    CodigoProjeto INTEGER PRIMARY KEY,
    NomeProjeto varchar (1000) NOT NULL,        
    EnderecoProjeto varchar (1000),             
    Quantidade_de_VoluntariosProjeto INTEGER 
);

CREATE TABLE Voluntario(
    RG int PRIMARY KEY,
    CodigoProjeto INTEGER,
    NomeVoluntario varchar (100) NOT NULL,        
    IdadeVoluntario INTEGER,             
    TelefoneVoluntario int,             
    EmailVoluntario varchar (200),              
    SobreVoce varchar (1000), 
    foreign key (CodigoProjeto) references Projetos (CodigoProjeto)
);