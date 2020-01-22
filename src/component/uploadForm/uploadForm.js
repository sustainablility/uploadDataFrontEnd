import React from "react";
import uploadDataHooker from "../../action/uploadDataHooker";
import DatasetNameInputBox from "./datasetName";
import DatasetTypeSelect from "./datasetType";
import UploadFileSelect from "./uploadFile";
import Publicity from "./publicity";
import MetaData from "./metaData";

class UploadForm extends React.Component{
    render() {
        return(
            <div id="uploadData-form-frame">
                <div className="uploadData-form-line">
                    <DatasetNameInputBox />
                </div>
                <div className="uploadData-form-line">
                    <DatasetTypeSelect />
                </div>
                <div className="uploadData-form-line">
                    <UploadFileSelect />
                </div>
                <div className="uploadData-form-line">
                    <Publicity />
                </div>
                <div className="uploadData-form-line">
                    <MetaData />
                </div>
                <div className="uploadData-form-line">
                    <button onClick={uploadDataHooker}>Upload</button>
                </div>

            </div>
        )
    }
}
export default UploadForm;