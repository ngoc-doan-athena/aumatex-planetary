import React, { useState } from "react";
import tw from "twin.macro";
import {
	animated,
	useSpring,
	config,
	useSpringRef,
	useChain,
} from "react-spring";

function Checkbox() {
	const [isChecked, setIsChecked] = useState(false);
	const checkboxAnimationRef = useSpringRef();
	const checkboxAnimationStyle = useSpring({
		backgroundColor: isChecked ? "#fff" : "#fff",
		borderColor: isChecked ? "#ff9701" : "#b1b2be",
		config: config.gentle,
		ref: checkboxAnimationRef,
	});

	const [checkmarkLength, setCheckmarkLength] = useState(null);

	const checkmarkAnimationRef = useSpringRef();
	const checkmarkAnimationStyle = useSpring({
		x: isChecked ? 0 : checkmarkLength,
		config: config.gentle,
		ref: checkmarkAnimationRef,
	});

	useChain(
		isChecked
			? [checkboxAnimationRef, checkmarkAnimationRef]
			: [checkmarkAnimationRef, checkboxAnimationRef],
		[0, 0.1]
	);

	return (
		<label>
			<input
				type="checkbox"
				onChange={() => {
					setIsChecked(!isChecked);
				}}
				tw="appearance-none border-solid border-2 border-primary-900 rounded-sm"
			/>
			<animated.svg
				style={checkboxAnimationStyle}
				className={`input-checkbox ${isChecked ? "is-checked" : ""}`}
				aria-hidden="true"
				fill="none"
				viewBox="0 0 20 20"
			>
				<animated.path
					d="M1 4.5L5 9L14 1"
					strokeWidth="2"
					stroke="#ff9701"
					ref={(ref) => {
						if (ref) {
							setCheckmarkLength(ref.getTotalLength());
						}
					}}
					strokeDasharray={checkmarkLength}
					strokeDashoffset={checkmarkAnimationStyle.x}
				/>
			</animated.svg>
		</label>
	);
}

export default Checkbox;