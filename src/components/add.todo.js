import React from "react";
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
  DatePickerInput
} from "carbon-components-react";

import { Link } from "react-router-dom";

const AddTodo = ({ show, data }) => {
  return (
    <>
      <div className="side--overlay"></div>
      <aside className="side">
        <div className="side--nav">
          <h4>Add Todo</h4>
          <button aria-label="close" className="side--close" type="button">
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
                    invalidText="A todo name is required"
                    className="--todoName"
                    type="text"
                    labelText="Todo Name"
                  />
                </div>
                <div className="input-wrapper">
                  <NumberInput
                    value={1}
                    step={1}
                    label="Priority"
                    min={1}
                    id="priorityInput"
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
                      iconDescription="Icon description"
                      id="date-picker-input-id"
                      invalid={false}
                      invalidText="A valid value is required"
                      labelText="Date Picker label"
                      pattern="d{1,2}"
                      placeholder="mm/dd/yyyy"
                      type="text"
                    />
                  </DatePicker>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="side--footer">
          <Button kind="secondary">Cancel</Button>
          <Button renderIcon={Add}>Add Todo</Button>
        </div>
      </aside>
    </>
  );
};

export default AddTodo;
