// src/ColorField.js
import React from "react";
import { SketchPicker } from "react-color";

const ColorField = ({ value, onChange }) => {
  const handleChangeComplete = (color) => {
    onChange(color.hex);
  };

  return (
    <SketchPicker
      color={value}
      onChangeComplete={handleChangeComplete}
      disableAlpha
    />
  );
};

export default ColorField;
