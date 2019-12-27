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

import AddTodo from "./add.todo";

const batchActionClick = selectedRows => () => console.log("clicked");

const insertInRandomPosition = (array, element) => {
  const index = Math.floor(Math.random() * (array.length + 1));
  return [...array.slice(0, index), element, ...array.slice(index)];
};

class TodoTable extends React.Component {
  state = {
    rows: this.props.initialRows,
    headers: this.props.headers,
    id: 0,
    isEditing: false
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

  handleAddTodo = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });

    console.log("is Editing:" + this.state.isEditing);
  };

  render() {
    let addTodoPanel = null;

    if (this.state.isEditing) {
      addTodoPanel = <AddTodo />;
    }

    return (
      <>
        {addTodoPanel}
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
                    <Button renderIcon={Add} onClick={this.handleAddTodo}>
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
                                <TableCell key={cell.id}>
                                  {cell.value}
                                </TableCell>
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
      </>
    );
  }
}

export default TodoTable;
