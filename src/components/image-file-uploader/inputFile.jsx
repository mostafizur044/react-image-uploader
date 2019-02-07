import React from "react";

const InputFile = ({ accept, handelInput, handelDragEnter, handelDragEnd, ...rest }) => {
  return (
    <input
      type="file"
      id="images"
      name="images"
        onChange={handelInput}
        onDragEnter={handelDragEnter}
        onDragEnd={handelDragEnd}
        onDragLeave={handelDragEnd}
        onDrop={handelDragEnd}
      {...rest}
      accept={accept}
    />
  );
};

export default InputFile;
