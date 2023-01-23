import { NavLink, Outlet } from "react-router-dom";

const Team = () => {
    return (
        <main className="helpLayout">
            <div className="helpLayout__content">
                <h1 className="helpLayout__title">
                    Help
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias sint quas veniam, consequuntur dolorum!</p>
            </div>
            <div className="helpLayout__links">
                <NavLink to='faq'>Faq</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </div>
            <Outlet />
        </main>
    );
}

export default Team;