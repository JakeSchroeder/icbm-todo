import React, { useState } from "react";
import "../styles/side.scss";
import "../styles/form.scss";

import {
  Close20 as Close,
  ArrowRight16 as Arrow,
  Add16 as Add
} from "@carbon/icons-react";

import {
  Button,
  Form,
  FormLabel,
  // FormGroup,
  TextInput,
  NumberInput,
  DatePicker,
  DatePickerInput,
  TextArea
} from "carbon-components-react";

// import { Link } from "react-router-dom";

const AddTodo = ({ addTodo, isAdding, toggleAdding }) => {
  let [name, setName] = useState("");
  let [priority, setPriority] = useState(1);
  let [dueDate, setDueDate] = useState("");
  let [description, setDescription] = useState("");

  return (
    <>
      <div onClick={toggleAdding} className={`side--overlay ${isAdding}`}></div>
      <aside className={`side ${isAdding}`}>
        <div className="side--nav">
          <h4>Add Todo</h4>
          <button
            onClick={toggleAdding}
            aria-label="close"
            className="side--close"
            type="button"
          >
            <Close />
          </button>
        </div>
        <div className="side--wrapper">
          <div className="side--content">
            <Form>
              <div className="formGrouping">
                <div className="input-wrapper">
                  <TextInput
                    autoComplete="todo-name"
                    id="todoName"
                    // invalid
                    placeholder="New todo"
                    invalidText="A todo name is required"
                    className="--todoName"
                    type="text"
                    labelText="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <NumberInput
                    step={1}
                    label="Priority"
                    min={1}
                    id="priorityInput"
                    value={priority}
                    onChange={e => setPriority(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <DatePicker
                    dateFormat="m/d/Y"
                    datePickerType="single"
                    id="date-picker"
                    light={false}
                    locale="en"
                    short={false}
                  >
                    <DatePickerInput
                      className="some-class"
                      disabled={false}
                      iconDescription="Calendar icon"
                      id="date-picker-input-id"
                      invalid={false}
                      invalidText="A valid value is required"
                      labelText="Due Date"
                      pattern="d{1,2}/d{4}"
                      placeholder="mm/dd/yyyy"
                      type="text"
                      value={dueDate}
                      onChange={e => setDueDate(e.target.value)}
                    />
                  </DatePicker>
                </div>
                <div className="input-wrapper">
                  <TextArea
                    className="--textArea"
                    cols={50}
                    id="todo-description"
                    invalid={false}
                    invalidText="A valid todo description is required"
                    labelText="Description"
                    light={false}
                    placeholder="Placeholder text."
                    rows={6}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="side--footer">
          <Button onClick={toggleAdding} kind="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              addTodo(name, priority, dueDate, description);
              setName("");
              setPriority(1);
              setDueDate("");
              setDescription("");
            }}
            renderIcon={Add}
          >
            Add Todo
          </Button>
        </div>
      </aside>
    </>
  );
};

export default AddTodo;
