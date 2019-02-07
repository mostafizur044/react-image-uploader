import React from "react";


const Preview = ({ imagePreview, width, height, removeFile }) => {
  const divStyle = {
    width: width ? width : 100,
    height: height ? height : 100
  };
  const imgStyle = {
    width: width ? width - 10 : 100,
    height: height ? height - 10 : 100
  };

  return (
    <div className="image-container">
      {imagePreview.map((img, i) => {
        return (
          <div key={i} className="previewImage" style={divStyle}>
            <img src={getCorrectImage(img)} alt="no image" style={imgStyle} />
            <div className="overlay">
              {previewFile(img)}
              <span
                className="btn btn-sm btn-custom-reset"
                onClick={() => removeFile(i)}
              >
                &times;
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function getCorrectImage(img) {
  if (typeof img === "string") return img;
  return "https://cdn0.iconfinder.com/data/icons/iconico-3/1024/63.png";
}

function previewFile(img) {
  if(typeof img === "object") {
    const file = URL.createObjectURL(img);
  return <a className="btn btn-sm btn-custom-reset" href={file} target="_blank">Preview</a>
  }
}

export default Preview;
