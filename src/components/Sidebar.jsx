import CustomButton from "./CustomButton"
import './Sidebar.scss'

const Sidebar = () =>{
    return(
        <div className="sidebar-container">
            <div className="logo">
                <h2>Magno's</h2>
                <p>TaskMenager</p>
            </div>
            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    )
}

export default Sidebar