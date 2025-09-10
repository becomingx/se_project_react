import "../blocks/ToggleSwitch.css";

export default function  ToggleSwitch() {
    return <label className="toggle-switch">
        <input type="checkbox" className="toggle-switch__checkbox" />
        <span className="toggle-switch__circle">F</span>
        <span class="toggle-switch__C">C</span>
    </label>
}

