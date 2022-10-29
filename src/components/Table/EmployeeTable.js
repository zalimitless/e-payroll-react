import React, { useMemo } from "react";
import { useTable, usePagination, useRowSelect } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { Checkbox } from "./TableCheckbox";

import "../../Styling/EmployeeTable.css";

function EmployeeTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((cols) => {
        return [
          {
            id: "selection",
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...cols,
        ];
      });
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    prepareRow,
    selectedFlatRows,
    toggleAllRowsSelected,
  } = tableInstance;

  const { pageIndex } = state;

  // selectedFlatRows contains the selected data from the table that is needed to identify the employee that we are working with.
  // We will always get only 1 record in this case
  console.log(selectedFlatRows[0]?.allCells[1]?.value);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={row.isSelected ? "selected" : ""}
                onClick={() => {
                  toggleAllRowsSelected(false);
                  // @ts-ignore
                  row.toggleRowSelected(!row.isSelected);
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="center">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to Page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
}

EmployeeTable.defaultProps = {};
EmployeeTable.propTypes = {};

export default EmployeeTable;
