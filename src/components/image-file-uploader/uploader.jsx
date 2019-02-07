import React, { Component } from "react";
import InputFile from "./inputFile";
import "./uploader.css";

class Uploader extends Component {
  state = {
    filesToUpload: [],
    filesPreview: [],
    imagePreview: [],
    backColor: "",
    hoverClass: ""
  };

  handelDragEnter = e => {
    const backColor = "#398bf7";
    const hoverClass = "dropHover";
    this.setState({ backColor, hoverClass });
  };
  handelDragEnd = e => {
    const backColor = "#DADFE3";
    const hoverClass = "";
    this.setState({ backColor, hoverClass });
  };

  handelInput = (file) => {
      console.log(file.currentTarget.files)
      const files = file.currentTarget.files;
      if(files){
        if(this.props.multi){
          this.multiFile(files);
        } else { 
          this.clear();
          this.imageView(files[0]);
        }
      }
  }

  multiFile(file){
    for(let i of file){
      this.imageView(i);
    }
  }

  clear() {
    // this.filesToUpload = [];
    // this.imagePreview = [];
    // this.filesPreview = [];
    // this.loader = null;
  }

  imageView(i){ 
    // const {imagePreview} = this.state;
    // imagePreview.push(i);
    // this.setState({imagePreview});
    let reader = new FileReader();
    reader.onload =  (e)=>{
        const {imagePreview} = this.state;
        imagePreview.push(reader.result);
        this.setState({imagePreview});
    };
    reader.readAsDataURL(i);
  }

  render() {
    const { multi, accept, height, width } = this.props;

    return (
      <section>
        <div>
          <div
            className={"drop " + this.state.hoverClass}
            style={{ borderColor: this.state.backColor }}
          >
            <div className="cont">
              <i className="fa fa-cloud-upload" />
              <div className="tit">Drop files here or click to upload.</div>
              <div className="desc">Maximium size limit 2 MB</div>
            </div>
            {multi ? (
              <InputFile
                multiple="multiple"
                handelInput={this.handelInput}
                handelDragEnd={this.handelDragEnd}
                handelDragEnter={this.handelDragEnter}
              />
            ) : (
              <InputFile
                handelInput={this.handelInput}
                handelDragEnd={this.handelDragEnd}
                handelDragEnter={this.handelDragEnter}
              />
            )}
          </div>

          <div className="text-center upload-btn">
            {/* <div>
              <div className="progress m-progress--sm">
                <div
                  className="progress-bar m--bg-primary"
                  role="progressbar"
                  style={{ width: output.file.progress.data.percentage + "%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <span>{output.file.progress.data.speedHuman}</span>
            </div> */}
            <button
              type="submit"
              className="btn btn-custom-upload btn-sm"
              //   onClick={uploadFile()}
              //   style={{ marginRight: 10 }}
            >
              <span>Upload</span>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-custom-reset"
              // onClick="clear()"
            >
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div className="image-container">
          {this.state.imagePreview.map( (img, i) => {
            return (
              <div
                key={i}
                className="previewImage"
                // style={{ width: width + "px", height: height + "px" }}
              >
                <img src={img} width={width ? width - 10 : 80} />
                <div className="overlay">
                  <span
                    className="btn btn-sm btn-custom-reset"
                    // onClick="removeFile(i)"
                  >
                    <i className="fa fa-times" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Uploader;
