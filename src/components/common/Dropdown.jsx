import { useState , useRef} from 'react';
import PropTypes from "prop-types";
// import "/arrow.png";
const Dropdown = ({name, text}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => { setIsActive(!isActive); } // 'setIsActive' if not open.

    return (
        <div className={"menu_container"}>
            <button onClick={onClick} className={`menu_button`}>{name}
                <p className={`arrow ${isActive ? 'active' : 'inactive'}`}><img src={"../public/arrow.png"} alt="arrow dropdown"/></p>
            </button>
            <div ref={dropdownRef} className={`menu_content_container ${isActive ? 'active' : 'inactive'}`}>
                {/* Check if text is an array and render accordingly */}
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




