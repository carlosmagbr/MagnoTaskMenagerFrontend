import { useNavigate } from "react-router-dom"

import CustomButton from "./CustomButton"
import './Sidebar.scss'

const Sidebar = () =>{
    const navigate = useNavigate()

    const handleSignOutClick = () => {
        navigate('/login')
    }

    return(
        <div className="sidebar-container">
            <div className="logo">
                <h2>Magno's</h2>
                <p>TaskMenager</p>
            </div>
            <div className="sign-out">
                <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
            </div>
        </div>
    )
}

export default Sidebar