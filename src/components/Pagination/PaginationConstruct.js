import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { usePagination, trunCate } from "./PaginationContext.js";
import FeatherIcon from "feather-icons-react";

const PaginationRoot = tw.div`relative text-center`;
const PaginationWrap = styled.ul`
	${tw`flex flex-row items-center justify-center list-none m-0 p-0`}
	.is-disabled {
		${tw`pointer-events-none text-gray-400 dark:text-gray-900/25`}
	}
	.is-current {
		${tw`bg-primary-700 dark:bg-primary-900 text-white`}
	}
`;
const PaginationLink = styled.li`
	${tw`inline-block cursor-pointer py-2 px-3 mx-1 align-middle leading-none bg-gray-100 dark:bg-gray-dark hover:bg-primary-700 dark:hover:bg-primary-900 hover:text-white rounded-sm transition duration-300 ease-in-out`}
`;
const PaginationControl = tw.li`inline-block cursor-pointer p-2 mx-1 align-middle leading-3 bg-gray-100 dark:bg-gray-dark rounded-sm hover:bg-primary-700 dark:hover:bg-primary-900 hover:text-white rounded-sm transition duration-300 ease-in-out`;

const Pagination = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
		...otherProps
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<PaginationRoot className="pagination">
			<PaginationWrap className="pagination__container">
				<PaginationControl
					className={
						"pagination__item " +
						(currentPage === 1 ? "is-disabled" : " ")
					}
					disabled={currentPage === 1 ? true : false}
					onClick={onPrevious}
				>
					<FeatherIcon
						icon="chevron-left"
						size="16"
						stroke="currentColor"
					/>
				</PaginationControl>
				{paginationRange.map((pageNumber, index) => {
					if (pageNumber === trunCate) {
						return (
							<PaginationLink
								key={index}
								className="pagination__item is-dots"
							>
								&#8230;
							</PaginationLink>
						);
					}

					return (
						<PaginationLink
							key={index}
							className={
								"pagination__item " +
								(pageNumber === currentPage
									? "is-current"
									: " ")
							}
							onClick={() => onPageChange(pageNumber)}
						>
							{pageNumber}
						</PaginationLink>
					);
				})}
				<PaginationControl
					className={
						"pagination__item " +
						(currentPage === lastPage ? "is-disabled" : " ")
					}
					disabled={currentPage === lastPage ? true : false}
					onClick={onNext}
				>
					<FeatherIcon
						icon="chevron-right"
						size="16"
						stroke="currentColor"
					/>
				</PaginationControl>
			</PaginationWrap>
		</PaginationRoot>
	);
};

export default Pagination;