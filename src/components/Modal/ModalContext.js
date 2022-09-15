import React from "react";
import Modal from "react-modal";

/* wraps react-modal to allow styling the modal overlay */
export default ({ className, modalIsOpen, setModalIsOpen, ...props }) => {
	const contentClassName = `${className}__container`;
	const overlayClassName = `${className}__overlay`;

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={() => setModalIsOpen(false)}
			className={contentClassName}
			overlayClassName={overlayClassName}
			{...props}
		/>
	);
};