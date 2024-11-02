import styled from "styled-components"

const ArticleText = styled.article`
    background-color: #fff; 
    display: flex;
    max-width:1200px;
    margin: 15px auto;
`

const SectionText = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
`

const ArticleH1 = styled.h1`
    font-size: 30px;
    color: #1f1f1f;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`

const ArticleH2 = styled.h2`
    font-size: 25px;
    color: #ED9B13;
    text-align: center;
    margin-top: -10px;

`

const ArticleP = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    padding: 0 20px;
    color: #1f1f1f;
    padding: 5px;
    margin-top: -7px;
`



function ArticleInformations(){
    return(
        <div>
            <ArticleText>
                {/* Texto1 */}
                <SectionText>
                    <ArticleH1>7</ArticleH1>
                    <ArticleH2>Projetos Sociais</ArticleH2>
                    <ArticleP>3 Centro de Crianças e Adolescentes, 3 Centros Temporários de Acolhimento e 1 Centro de Desenvolvimento Social e Produtivo.</ArticleP>
                </SectionText>

                {/* Texto2 */}
                <SectionText>
                    <ArticleH1>5</ArticleH1>
                    <ArticleH2>Comunidades</ArticleH2>
                    <ArticleP>Os Projetos estão situados na região Norte, Sul e Centro de São Paulo,nos bairros da Mooca,Pirituba,Planalto Paulista,Jaraguá e Jardim Vivian.</ArticleP>
                </SectionText>

                 {/* Texto3 */}
                <SectionText>
                    <ArticleH1>199</ArticleH1>
                    <ArticleH2>Colaboradores</ArticleH2>
                    <ArticleP>A organização ainda gera centenas de empregos, prezando sempre a qualidade do atendimento prestado as comunidades.</ArticleP>
                </SectionText>

                {/* Texto4 */}
                <SectionText>
                    <ArticleH1>1220</ArticleH1>
                    <ArticleH2>Pessoas Atendidas</ArticleH2>
                    <ArticleP>Mais de mil pessoas, são atendidas diariamente, centenas de famílias são assistida, fazendo valer os direitos sociais.</ArticleP> 
                </SectionText>
            </ArticleText>
        </div>
    )
}

export default ArticleInformations