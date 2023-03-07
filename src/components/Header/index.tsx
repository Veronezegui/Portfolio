import "./styles.scss";

export function Header() {
    var prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if ((prevScrollPos > currentScrollPos)) {
            const header = document.getElementById("headerContainer")
            header ? header.style.top = "0" : null
        } else {
            const header = document.getElementById("headerContainer")
            header ? header.style.top = "-100px" : null
        }
        prevScrollPos = currentScrollPos;
    }

    return (
        <div id="headerContainer">
            <h1 className="logo">Logo</h1>
            <div className="links">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
        </div>
    )
}