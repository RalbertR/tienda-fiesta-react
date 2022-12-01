import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark navbar-expand-md py-3 bg-dark">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="..">
                    <span class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"></span>
                    <span>Tienda de Comidas</span>
                </a>
            <div id="navcol-3" class="collapse navbar-collapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="..">
                            <button class="btn btn-light" type="button">Panchos</button>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="..">
                            <button class="btn btn-light" type="button">Hamburguesas</button>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="..">
                            <button class="btn btn-light" type="button">Pizzas</button>
                        </a>
                    </li>
                </ul>
                
                <CartWidget />
            </div>
        </div>
    </nav>
    )
}
export default Navbar