import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import ModalWrapper from "./ModalContext.js";
import Icon from "../Icon/index.js"

const ModalWrapper = styled.div`
	&.modal__overlay {
		${tw`fixed inset-0 z-50 bg-white/75 dark:bg-black/75`}
	}
	&.modal__container {
		${tw`xl:m-auto lg:m-auto m-4 max-w-screen-lg absolute inset-0 flex justify-center items-center rounded-md bg-white text-black dark:bg-gray-dark dark:text-white outline-none`}
	}
	.modal__content {
		${tw`w-full lg:p-16`}
	}
`;
const ModalClose = styled.button`
	${tw`absolute top-0 right-0 mt-4 mr-4 hocus:text-primary-500 border-0 text-black dark:text-white bg-transparent`}
	svg {
		${tw`stroke-current`}
	}
`;

const ModalBox = (props, children) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const toggleModal = () => setModalIsOpen(!modalIsOpen);

	return (
		<ModalWrapper
			className="modal"
			isOpen={modalIsOpen}
			onRequestClose={toggleModal}
			closeTimeoutMS={300}
			shouldCloseOnOverlayClick={true}
		>
			<ModalClose
				onClick={toggleModal}
				title="Close Modal"
				className="modal__close"
			>
				<Icon icon="x" size="24" />
			</ModalClose>
			{children}
		</ModalWrapper>
	);
};

export default ModalBox;