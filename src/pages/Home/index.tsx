import { Header, Photo, Container, Description, Footer, Projects, ProjectCard } from "./styles"
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init()

export function Home() {
    return (
        <Container>
            <Header>
                <div>
                    <a href="">Projetos</a>
                    <a href="">Contato</a>
                </div>
            </Header>
            <Description >
                <p>Guilherme Veroneze</p>
            </Description>
            <Projects>
                <ProjectCard data-aos="fade-up">
                </ProjectCard>
                <ProjectCard data-aos="fade-up">
                </ProjectCard>
                <ProjectCard data-aos="fade-up">
                </ProjectCard>
            </Projects>
            <Footer />
        </Container>
    )
}
