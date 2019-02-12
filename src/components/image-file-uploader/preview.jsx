import React from "react";


const Preview = ({ imagePreview, width, height, removeFile }) => {
  const divStyle = {
    width: width ? width : 120,
  };
  const imgStyle = {
    width: width ? width - 10 : 120,
    height: height ? height - 10 : 120
  };

  return (
    <div className="image-container">
      {imagePreview.map((img, i) => {
        return (
          <div key={i} className="previewImage" style={divStyle}>
            <div>
              <img src={getCorrectImage(img)} alt="no image" style={imgStyle} />
              {getName(img)}
            </div>
            <div className="overlay">
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
  console.log(img)
  if (typeof img === "string") return img;
  return "https://www.balcousa.com/wp-content/uploads/2017/11/unnamed.png";
}

function getName(img) {
  if (typeof img === "object") {
    return <small>Name: {img.name}, Size: {getSize(img.size)}</small>
  }
  return '';
}

function getSize(size) {
  let totalSize;
  if(size < 1000000){
    totalSize = Math.floor(size/1000) + 'KB';
 }else{
    totalSize = Math.floor(size/1000000) + 'MB';  
 }
 return totalSize;
}

export default Preview;
