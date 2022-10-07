import {unstable_HistoryRouter as Router, Routes, Route, Link} from "react-router-dom";
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Home, About, Contact} from "./pages"
import {userConfirmation} from './UserConfirmation'
import {history} from "./useHistoryBlock";


function App() {
    return (
        <Router history={history}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <div style={{paddingInline: '32px'}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
