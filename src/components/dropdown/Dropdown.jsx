import { useState , useRef} from 'react';
import PropTypes from "prop-types";

const Dropdown = ({name, text}) => {
    const dropdownRef = useRef(null); // 'useRef' pour créer une référence à un élément du DOM.
    const [isActive, setIsActive] = useState(false); // 'useState' pour créer un état local.
    const onClick = () => { setIsActive(!isActive); } // 'setIsActive' pour changer l'état local en inversant la valeur actuelle.

    return (
        <div className={"menu_container"}>
            <button onClick={onClick} className={`menu_button`}>{name}
                <p className={`arrow ${isActive ? 'active' : 'inactive'}`}><img src={"../public/arrow.png"} alt="arrow dropdown"/></p>
            </button>
            <div ref={dropdownRef} className={`menu_content_container ${isActive ? 'active' : 'inactive'}`}> {/* 'ref' pour attacher une référence à un élément du DOM. Si isActive ok, alors on passe la class Active */}
                {Array.isArray(text) ? (
                    <ul>
                        {text.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    text
                )}
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ])}

export default Dropdown;

// dropdown button use proptypes and name as a prop.
// so that the name of the dropdown button can be passed as a prop and set in about and logement pages.
// dropdown button use state and setIsOpen as a state.




