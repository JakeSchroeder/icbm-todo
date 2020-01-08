import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Button,
  DataTable,
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  OverflowMenu,
  OverflowMenuItem
} from "carbon-components-react";

import {
  Add16 as Add,
  Delete16 as Delete,
  Save16 as Save,
  Download16 as Download
} from "@carbon/icons-react";

import "../styles/todos.scss";

const batchActionClick = selectedRows => () => console.log("clicked");

// const insertInRandomPosition = (array, element) => {
//   const index = Math.floor(Math.random() * (array.length + 1));
//   return [...array.slice(0, index), element, ...array.slice(index)];
// };

const TodoTable = ({ rows, headers, toggleAdding }) => {
  return (
    <div className="table--wrapper">
      <DataTable
        useZebraStyles={false}
        isSortable={true}
        rows={rows}
        headers={headers}
        // {...this.props}
        render={({
          rows,
          headers,
          getHeaderProps,
          getSelectionProps,
          getBatchActionProps,
          getRowProps,
          onInputChange,
          selectedRows,
          getTableProps,
          getTableContainerProps
        }) => (
          <TableContainer
            title="[User] Todos"
            description={
              "Below are a list of your Todos. You can sort, filter, check off and add new todo items."
            }
            {...getTableContainerProps()}
          >
            <TableToolbar>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  renderIcon={Delete}
                  iconDescription="Delete the selected rows"
                  onClick={batchActionClick(selectedRows)}
                >
                  Delete
                </TableBatchAction>

                <TableBatchAction
                  renderIcon={Download}
                  iconDescription="Download the selected rows"
                  onClick={batchActionClick(selectedRows)}
                >
                  Download
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent>
                <TableToolbarSearch onChange={onInputChange} />
                {/* <TableToolbarMenu>
                    <TableToolbarAction
                      primaryFocus
                      onClick={() => console.log("Add Row")}
                    >
                      Add row
                    </TableToolbarAction>
                    <TableToolbarAction onClick={) => console.log("Add Header")>
                      Add header
                    </TableToolbarAction>
                  </TableToolbarMenu> */}
                <Button renderIcon={Add} onClick={toggleAdding}>
                  Add Todo
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            <div className="table-wrapper">
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    <TableExpandHeader />
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map(header => (
                      <TableHeader
                        {...getHeaderProps({ header, isSortable: true })}
                      >
                        {header.header}
                      </TableHeader>
                    ))}
                    <TableHeader />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <React.Fragment key={row.id}>
                      <TableExpandRow {...getRowProps({ row })}>
                        <TableSelectRow {...getSelectionProps({ row })} />
                        {row.cells.map(cell => {
                          if (cell.info.header === "completed") {
                            return (
                              <TableCell key={cell.id}>
                                <Checkbox
                                  id={"check-" + cell.id}
                                  checked={cell.value}
                                  hideLabel={true}
                                  labelText="completed"
                                />
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            );
                          }
                        })}
                        <TableCell>
                          <OverflowMenu flipped>
                            <OverflowMenuItem itemText="Edit">
                              Edit
                            </OverflowMenuItem>
                            <OverflowMenuItem itemText="Delete">
                              Delete
                            </OverflowMenuItem>
                          </OverflowMenu>
                        </TableCell>
                      </TableExpandRow>

                      <TableExpandedRow colSpan={headers.length + 4}>
                        <h1>{row.id}</h1>
                        <p>Description here</p>
                      </TableExpandedRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        )}
      />
    </div>
  );
};

export default TodoTable;
