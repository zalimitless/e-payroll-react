import React from "react";

const RadioSet = (props) => {
    let genders = ["Unspecified", "Male", "Female"];

    return (
      <div className="input-field-container">
        <p>{props.FieldName + (props.Mandatory ? " *" : "")}</p>
        <div>
          {genders.map((gender) => {
            return (
              <>
                <input key={gender} type="radio" id={gender} name="gender" checked={genders.indexOf(gender) === props.value} value={gender} />
                <label  htmlFor={gender}>{gender}</label>
              </>
            );
          })}
        </div>
      </div>
    );
}

export default RadioSet;
