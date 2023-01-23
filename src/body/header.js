import './styles/header.css'

function header() {
    return (
        <div id="header-body">
            <h1>LOGO</h1>
            <nav>
                <div id="nav-element">Strona główna</div>
                <div id="nav-element">Menu</div>
                <div id="nav-element">Kontakt</div>
            </nav>
        </div>
    );
}

export default header