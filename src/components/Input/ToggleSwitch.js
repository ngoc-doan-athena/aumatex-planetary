import React from "react";
import PropTypes from "prop-types";

// How to use:
// <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />

const ToggleSwitch = ({ id, name, checked, onChange, disabled }) => {
	function handleKeyPress(e) {
		if (e.keyCode !== 32) return;

		e.preventDefault();
		onChange(!checked);
	}

	return (
		<div className="toggle-switch">
			<input
				type="checkbox"
				name={name}
				className="toggle-switch-checkbox"
				id={id}
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				disabled={disabled}
			/>
			{id ? (
				<label
					className="toggle-switch-label"
					tabIndex={disabled ? -1 : 1}
					onKeyDown={(e) => handleKeyPress(e)}
					htmlFor={id}
				>
					<span
						className={
							disabled
								? "toggle-switch-inner toggle-switch-disabled"
								: "toggle-switch-inner"
						}
						tabIndex={-1}
					/>
					<span
						className={
							disabled
								? "toggle-switch-switch toggle-switch-disabled"
								: "toggle-switch-switch"
						}
						tabIndex={-1}
					/>
				</label>
			) : null}
		</div>
	);
};

// Set default props for rendering.
ToggleSwitch.propTypes = {
	id: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string,
	disabled: PropTypes.bool,
};

export default ToggleSwitch;