import React, { Component } from "react";
import InputFile from "./inputFile";
import Preview from "./preview";
import "./uploader.css";

class Uploader extends Component {
  state = {
    fileInput: "",
    filesToUpload: [],
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

  handelInput = file => {
    const files = file.currentTarget.files;
    if (files) {
      if (this.props.multi) {
        this.multiFile(files);
      } else {
        this.clearAll();
        this.imageView(files[0]);
      }
    }
    console.log(this.state);
  };

  multiFile(file) {
    for (let i of file) {
      this.imageView(i);
    }
  }

  clearAll = () => {
    this.setState({
      filesToUpload: [],
      imagePreview: []
    });
  };

  imageView(i) {
    const { filesToUpload } = this.state;
    filesToUpload.push(i);
    this.setState({ filesToUpload });
    if (i.type.includes("image/")) {
      let reader = new FileReader();
      reader.onload = e => {
        this.pushImagePreview(reader.result);
      };
      reader.readAsDataURL(i);
    } else {
      this.pushImagePreview(i)
    }
  }

  pushImagePreview(data) {
    const { imagePreview } = this.state;
    imagePreview.push(data);
    this.setState({ imagePreview });
  }

  handelRemove = index => {
    let { imagePreview, filesToUpload } = this.state;
    imagePreview = imagePreview.filter((img, i) => i !== index);
    filesToUpload = filesToUpload.filter((img, i) => i !== index);
    this.setState({ imagePreview, filesToUpload });
  };

  render() {
    const { multi, accept, height, width, url, data, limit } = this.props;

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
                value={this.state.fileInput}
                accept={accept}
              />
            ) : (
              <InputFile
                handelInput={this.handelInput}
                handelDragEnd={this.handelDragEnd}
                handelDragEnter={this.handelDragEnter}
                value={this.state.fileInput}
                accept={accept}
              />
            )}
          </div>

          <Preview
            imagePreview={this.state.imagePreview}
            width={width}
            height={height}
            removeFile={this.handelRemove}
          />

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
              onClick={this.clearAll}
            >
              <span>Reset</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Uploader;
