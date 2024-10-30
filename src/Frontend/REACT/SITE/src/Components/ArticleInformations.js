import styled from "styled-components"

const ArticleText = styled.article`
    background-color: #fff; 
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    max-width:1300px;
`

const SectionText = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
`

const ArticleTexth1 = styled.h1`
    font-size: 35px;
    color: #1f1f1f;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
`

const ArticleTexth2 = styled.h2`
    font-size: 30px;
    color: #ED9B13;
    text-align: center;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    margin-top: -10px;

`

const ArticleTextP = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    padding: 0 20px;
    color: #1f1f1f;
    text-shadow: 1px 1.15px rgba(0, 0, 0, 0.3);
    margin-top: -5px;

`



function ArticleInformations(){
    return(
        <div>
            <ArticleText>
                {/* Texto1 */}
                <SectionText>
                    <ArticleTexth1>7</ArticleTexth1>
                    <ArticleTexth2>Projetos Sociais</ArticleTexth2>
                    <ArticleTextP>3 Centro de Crianças e Adolescentes, 3 Centros Temporários de Acolhimento e 1 Centro de Desenvolvimento Social e Produtivo.</ArticleTextP>
                </SectionText>

                {/* Texto2 */}
                <SectionText>
                    <ArticleTexth1>5</ArticleTexth1>
                    <ArticleTexth2>Comunidades</ArticleTexth2>
                    <ArticleTextP>Os Projetos estão situados na região Norte, Sul e Centro de São Paulo,nos bairros da Mooca,Pirituba,Planalto Paulista,Jaraguá e Jardim Vivian.</ArticleTextP>
                </SectionText>

                 {/* Texto3 */}
                <SectionText>
                    <ArticleTexth1>199</ArticleTexth1>
                    <ArticleTexth2>Colaboradores</ArticleTexth2>
                    <ArticleTextP>A organização ainda gera centenas de empregos, prezando sempre a qualidade do atendimento prestado as comunidades.</ArticleTextP>
                </SectionText>

                {/* Texto4 */}
                <SectionText>
                    <ArticleTexth1>1220</ArticleTexth1>
                    <ArticleTexth2>Pessoas Atendidas</ArticleTexth2>
                    <ArticleTextP>Mais de mil pessoas, são atendidas diariamente, centenas de famílias são assistida, fazendo valer os direitos sociais.</ArticleTextP>,
                </SectionText>
            </ArticleText>
        </div>
    )
}

export default ArticleInformations