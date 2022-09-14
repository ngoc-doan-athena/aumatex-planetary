import React from "react";
import Modal from "react-modal";

/* wraps react-modal to allow styling the modal overlay */
export default ({ className, ...props }) => {
	const contentClassName = `${className}__content`;
	const overlayClassName = `${className}__overlay`;
	return (
		<Modal
			className={contentClassName}
			overlayClassName={overlayClassName}
			{...props}
		/>
	);
};