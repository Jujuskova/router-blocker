import { unstable_HistoryRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home, About, Contact } from "./Pages"
import { history } from "./useHistoryBlock";


function App() {
    return (
        <Router history={history}>
            <ul>
                <li>
                    <NavLink to="/" end className={({ isActive }) =>isActive ? 'activeNavItem' : undefined} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) =>isActive ? 'activeNavItem' : undefined}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) =>isActive ? 'activeNavItem' : undefined}>Contact</NavLink>
                </li>
            </ul>

            <div style={{ paddingInline: '32px' }}>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
