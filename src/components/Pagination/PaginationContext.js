import React, { useMemo } from "react";

export const trunCate = "...";

const range = (start, end) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
	totalCount,
	pageSize,
	siblingCount = 1,
	currentPage,
}) => {
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);

		// Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*trunCate
		const totalPageNumbers = siblingCount + 5;
		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			totalPageCount
		);

		const showLeftDots = leftSiblingIndex > 2;
		const showRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		if (!showLeftDots && showRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, trunCate, totalPageCount];
		}

		if (showLeftDots && !showRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(
				totalPageCount - rightItemCount + 1,
				totalPageCount
			);
			return [firstPageIndex, trunCate, ...rightRange];
		}

		if (showLeftDots && showRightDots) {
			let midRange = range(leftSiblingIndex, rightSiblingIndex);
			return [
				firstPageIndex,
				trunCate,
				...midRange,
				trunCate,
				lastPageIndex,
			];
		}
	}, [totalCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
};