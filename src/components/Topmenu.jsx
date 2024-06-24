import {
    BrowserRouter,
    Link
} from "react-router-dom"

const Menu = () => {
    const padding = {
        paddingRight: 5,
        paddingLeft: 20
    }

    return (
        <div style={{ paddingTop: '70px ' }}>
            <Link to="/">Home</Link>
            <Link style={padding} to="/contacts">Contacts</Link>

        </div>
    )
}

export default Menu