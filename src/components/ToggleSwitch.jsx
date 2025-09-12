import "../blocks/ToggleSwitch.css";
import { useContext } from "react";
import  CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit.jsx";

const ToggleSwitch = () => {
    const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);
    return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        onChange={handleToggleSwitchChange}
        checked={currentTemperatureUnit === "C"}
      />
      <span className="toggle-switch__F">F</span>
      <span className="toggle-switch__C">C</span>
    </label>
  );
}

export default ToggleSwitch;