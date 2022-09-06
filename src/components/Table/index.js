import { useMemo } from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

import BoxBase from "../Box/index.js";

const Table = tw.table`w-full border-separate `;
const THead = tw.thead``;
const THeadCell = tw.th`align-middle bg-gray-100 dark:bg-gray-dark dark:text-white p-3 text-left first:w-12 last:w-28 first:rounded-l-md last:rounded-r-md`;
const TBody = tw.tbody`p-3`;
const TBodyRow = tw.tr`transition-all hover:bg-gray-100 dark:hover:bg-gray-dark`;
const TBodyCell = tw.td`align-middle p-3 first:rounded-l-md last:rounded-r-md`;
const TRow = tw.tr`relative`;

function Table({ columns, rows, props... }) {
	const renderColumns = columns.map((item, key) => {
		return (
			<TableHeadCell
				key={name}
				props...
			>
				{name}
			</TableHeadCell>
		);
	});

	const renderRows = rows.map((row, key, index) => {
		const rowKey = `row-${key}`;

		const tableRow = columns.map(({ name, align }) => {
			let template;

			if (Array.isArray(row[name])) {
				template = (
					<TBodyCell
						key={index}
						props...
					>
						{row[name][1]}
					</TBodyCell>
				);
			} else {
				template = (
					<TBodyCell
						key={index}
						props...
					>
						{row[name]}
					</TBodyCell>
				);
			}

			return template;
		});

		return <TBodyRow key={rowKey} props...>{tableRow}</TBodyRow>;
	});

	return useMemo(
		() => (
			<Table>
				<THead>
					<TRow>{renderColumns}</TRow>
				</THead>
				<TBody>{renderRows}</TBody>
			</Table>
		),
		[columns, rows]
	);
}

// Setting default values for the props of Table
Table.defaultProps = {
	columns: [],
	rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.object),
	rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;