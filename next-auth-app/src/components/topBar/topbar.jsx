import './topBar.css';

const TopBar = ({ isAuthenticated, onLogout, onShowLogin, onShowRegister }) => {
    
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <h1>Technical Test</h1>
                </div>

                <div className="topbarCenter">
                    <ul className="topbarMenu">
                        {!isAuthenticated ? (
                        <>
                            <li className="topbarMenuItem">
                            <button onClick={onShowLogin}>Iniciar sesión</button>
                            </li>
                            <li className="topbarMenuItem">
                            <button onClick={onShowRegister}>Registrarse</button>
                            </li>
                        </>
                        ) : (
                        <li className="topbarMenuItem">
                            <button onClick={onLogout}>Cerrar sesión</button>
                        </li>
                        )}
                    </ul>
                </div>

                <div className="topbarRight">
                    {isAuthenticated && (
                        <div className="userIcon">
                        <p>Usuario</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
