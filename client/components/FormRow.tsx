import React, { ChangeEventHandler } from "react";
interface Props {
  type: string;
  name: string;
  value: string;
  label: string;
  labelText?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}
const FormRow = ({
  type,
  name,
  value,
  label,
  labelText,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || label}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
