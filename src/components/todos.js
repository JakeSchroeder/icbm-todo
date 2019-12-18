import React from "react";
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
  TableToolbarMenu
} from "carbon-components-react";

import {
  Add16 as Add,
  Delete16 as Delete,
  Save16 as Save,
  Download16 as Download
} from "@carbon/icons-react";

import "../styles/todos.scss";

const initialRows = [
  {
    id: "a",
    name: "Load Balancer 3",
    priority: "1",
    dueDate: "12/1/2020",
    completed: false,
    description: "Load Balancer 3 Todo",
    subDescription: "kevins written word"
  },
  {
    id: "b",
    name: "Load Balancer 3",
    priority: "1",
    dueDate: "12/08/2020",
    completed: false
  },
  {
    id: "c",
    name: "Load Balancer 10",
    priority: "2",
    dueDate: "12/08/2020",
    completed: true
  },
  {
    id: "d",
    name: "Load Balancer 10",
    priority: "5",
    dueDate: "12/11/2020",
    completed: false
  }
];

const headers = [
  {
    key: "name",
    header: "Name"
  },
  {
    key: "priority",
    header: "Priority"
  },
  {
    key: "dueDate",
    header: "Due Date"
  },
  {
    key: "completed",
    header: "Completed"
  }
  //   {
  //     key: "attached_groups",
  //     header: "Attached Groups"
  //   },
  //   {
  //     key: "status",
  //     header: "Status"
  //   }
];

const batchActionClick = selectedRows => () => console.log("clicked");

const insertInRandomPosition = (array, element) => {
  const index = Math.floor(Math.random() * (array.length + 1));
  return [...array.slice(0, index), element, ...array.slice(index)];
};

class Todos extends React.Component {
  state = {
    rows: initialRows,
    headers: headers,
    id: 0
  };

  handleOnHeaderAdd = () => {
    const length = this.state.headers.length;
    const header = {
      key: `header_${length}`,
      header: `Header ${length}`
    };

    this.setState(state => {
      const rows = state.rows.map(row => {
        return {
          ...row,
          [header.key]: header.header
        };
      });
      return {
        rows,
        headers: state.headers.concat(header)
      };
    });
  };

  handleOnRowAdd = () => {
    this.setState(state => {
      const { id: _id, rows } = state;
      const id = _id + 1;
      const row = {
        id: "" + id,
        name: `New Row ${id}`,
        priority: "1",
        dueDate: "1/1/2020",
        completed: false
      };

      state.headers
        .filter(header => row[header.key] === undefined)
        .forEach(header => {
          row[header.key] = header.header;
        });

      return {
        id,
        rows: insertInRandomPosition(rows, row)
      };
    });
  };

  render() {
    return (
      <div className="table--wrapper">
        <DataTable
          useZebraStyles={false}
          isSortable={true}
          rows={this.state.rows}
          headers={this.state.headers}
          {...this.props}
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
                "Below are a list of your Todos. You can sort, filter, check off and add new one's."
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
                  <TableToolbarMenu>
                    <TableToolbarAction
                      primaryFocus
                      onClick={this.handleOnRowAdd}
                    >
                      Add row
                    </TableToolbarAction>
                    <TableToolbarAction onClick={this.handleOnHeaderAdd}>
                      Add header
                    </TableToolbarAction>
                  </TableToolbarMenu>
                  <Button
                    renderIcon={Add}
                    onClick={() => console.log("addNew")}
                  >
                    Add Todo
                  </Button>
                </TableToolbarContent>
              </TableToolbar>
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
                                  labelText=""
                                />
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell key={cell.id}>{cell.value}</TableCell>
                            );
                          }
                        })}
                      </TableExpandRow>
                      <TableExpandedRow colSpan={headers.length + 4}>
                        <h1>{row.id}</h1>
                        <p>Description here</p>
                      </TableExpandedRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        />
      </div>
    );
  }
}

export default Todos;
