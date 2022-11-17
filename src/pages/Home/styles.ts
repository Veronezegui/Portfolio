import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background: linear-gradient(to right top, #141e30,#243b55);
`

export const Header = styled.header`
    position: fixed;
    display: flex;
    width: 100%;
    max-width: 100%;
    height: 5rem;
    align-items: center;
    justify-content: flex-end;

    * {
        font-family: 'Josefin Sans', sans-serif;
        margin: 20px;
        text-decoration: none;
        color: #FFFFFF;
        font-weight: 700;
    }

`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    p {
        color: hsl(0, 0%, 100%);
        letter-spacing: 3px;
        font-weight: 800px;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 5px #1e90ff, 0 0 10px #1e90ff, 0 0 25px #1e90ff, 0 0 30px #1e90ff;
        font-size: 6rem;
        font-family: 'Josefin Sans' , sans-serif
    }

`

export const Photo = styled.div`
    display: flex;
    justify-content: center;   
    padding: 0 40px;
`



export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
`

export const Projects = styled.div`
    display: flex;
    max-width: 100%;
    height: 100vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    padding: 40px;
`;

export const ProjectCard = styled.div`
    background: #fff;
    width: 300px;
    height: 300px;
    border: 1px solid black;
`;