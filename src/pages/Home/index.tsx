import { Header } from "../../components/Header";
import "./styles.scss";

export function Home() {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <h1 className="title">Guilherme Veroneze</h1>
                <p className="subTitle">Hello, my name is Guilherme Veroneze, nice to meet you, I am a <span>Front-End Developer</span> and I would like to welcome you with my personal portfolio.</p>
            </div>
            <div id="about">
                <h1 className="aboutTitle">
                    About me
                </h1>
                <p className="aboutContent">
                    Meu contato com a área de tecnologia começou quando eu tinha 16 anos, com meu curso técnico de informática que fiz no IFRJ aqui
                    da minha cidade, Pinheiral, lá foi o meu primeiro contato com lógica de programação, algoritmos, html, css,
                    javascript e de cara eu já tive um interesse por essa área do front-end, conforme eu ia aprendendo as tags,
                    o css, e o javascript pra deixar aquilo "funcional" eu gostava mais.
                </p>
                <p>
                    No final desse curso eu e meu grupo resolvemos nos desafiar e resolvemos fazer nosso trabalho de conclusão em PHP
                    que na época não tinha na grade curricular do curso mas a gente achava interessante e queria tentar fazer algo com
                    essa linguagem, dai nós fizemos um site de alguel de salas, era bem simples, havia um formulário pra cadastro
                    de usuários, esses usuários eram salvos num banco mysql, dai existiam dois níveis de acesso, aqueles usuários que
                    iriam solicitar o agendamento das salas e os funcionários do Instituto que iriam avaliar e confirmar ou não esses
                    agendamentos. Na época não conseguimos finalizar o projeto por completo como pretendíamos, o que entregamos para a
                    banca de avaliação foi um CRUDE de usuários e também das salas, juntamente com uma interface web. Mas foi o primeiro projeto
                    razoavelmente grande que me marcou.
                </p>
                <p>
                    No ínicio do ano seguinte, 2019, eu comecei no curso de Sistemas de Informação na UniFOA, no comecinho do curso eu
                    passei novamente por grande parte do que eu já tinha visto no curso técnico, então o início do curso foi bem
                    tranquilo pra mim, onde consegui fixar ainda mais alguns conceitos que já conhecia.
                    Foi na metade de 2019 que conheci o React, na faculdade, achei sensacional você poder ir criando o código e
                    já visualizar as mudanças na interface, além de em um único arquivo você codar a interface e as funcionalidades
                    com o jsx.
                </p>
                <p>
                    No meio tempo, eu consegui o meu primeiro emprego como jovem aprendiz numa empresa de transporte público aqui da
                    minha cidade, a princípio eu era responsável apenas por atuar no setor de monitoramento veicular da empresa,
                    identificar atividades incorretas e reportá-las. Mas eu já estava doido pra atuar na programação, então eu busquei
                    manter um contato e ajudar o máximo que eu pudesse o coordenador de Ti da época, que no momento estava começando a
                    desenvolver o dashboard de bilhetagem da empresa.
                </p>
            </div>
            <div id="experience">
                <h1 className="aboutTitle">My Experience</h1>
                <div className="timeline">
                    <div className="tl-container-left">
                        <ul className="tl-content">
                            <h2>2022</h2>
                            <li>
                                Ago - Desenvolvedor Front-End - Cortex LTDA
                            </li>
                            <li>
                                Dez - Bacharelado em Sistemas de informação - UniFOA (100% concluído)
                            </li>
                        </ul>
                    </div>
                    <div className="tl-container-right">
                        <ul className="tl-content">
                            <h2>2020</h2>
                            <li>
                                Coordenador de Ti - Viação Pinheiral
                            </li>
                        </ul>
                    </div>
                    <div className="tl-container-left">
                        <ul className="tl-content">
                            <h2>2019</h2>
                            <li>
                                Bacharelado em Sistemas de informação - UniFOA (0% concluído)
                            </li>
                        </ul>
                    </div>
                    <div className="tl-container-right">
                        <ul className="tl-content">
                            <h2>2016</h2>
                            <li>
                                Curso Técnico de Informática - Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
