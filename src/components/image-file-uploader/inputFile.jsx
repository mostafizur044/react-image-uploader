import React from "react";

const InputFile = ({ handelInput, handelDragEnter, handelDragEnd, ...rest }) => {
  return (
    <input
      type="file"
      id="images"
      name="files"
        onChange={handelInput}
        onDragEnter={handelDragEnter}
        onDragEnd={handelDragEnd}
        onDragLeave={handelDragEnd}
        onDrop={handelDragEnd}
      {...rest}
    />
  );
};

export default InputFile;
