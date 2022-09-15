import React from "react";
import Modal from "react-modal";

/* wraps react-modal to allow styling the modal overlay */
export const ModalWrapper = ({ className, ...props }) => {
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