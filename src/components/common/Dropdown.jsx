import { useState } from 'react';
import PropTypes from "prop-types";
const Dropdown = ({name, text}) => {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => { setIsActive(!isActive); } // 'setIsActive' if not open.

    return (
    <div className={"menu_container"}>
        <button onClick={onClick} className={`menu_button ${isActive ? 'active' : 'inactive'}`}>{name} <p><img
            src="public/arrow_back_ios-24px%202.png" alt="arrow dropdown"/></p>
            <div className={"menu_content_container"}>{text}</div>
        </button>

    </div>
    )
}

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Dropdown;

// dropdown button use proptypes and name as a prop.
// so that the name of the dropdown button can be passed as a prop and set in about and logement pages.
// dropdown button use state and setIsOpen as a state.




