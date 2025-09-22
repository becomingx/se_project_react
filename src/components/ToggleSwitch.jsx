import "../blocks/ToggleSwitch.css";
import { useContext } from "react";
import  CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";

const ToggleSwitch = () => {
    const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);
    const handleInputChange = (e) => {
        e.stopPropagation(); // Prevents bubbling
        handleToggleSwitchChange();
    };
    const handleLabelClick = (e) => {
        e.stopPropagation(); // Also prevent bubbling on the label
    };

    return (
    <label className="toggle-switch" onClick={handleLabelClick}>
      <input
        type="checkbox"
        name="toggle-checkbox"
        className="toggle-switch__checkbox"
        onChange={handleInputChange}
        checked={currentTemperatureUnit === "C"}
      />
      <span className="toggle-switch__F">F</span>
      <span className="toggle-switch__C">C</span>
    </label>
  );
}

export default ToggleSwitch;