import axios from "axios";
import {uploadDataAPI} from "../config";

async function upload(datasetName, type, file, publicity, userToken, metaData) {
    let formData = new FormData();
    formData.append("datasetID", datasetName);
    formData.append("datasetType",type);
    formData.append("publicity", publicity);
    formData.append("userToken", userToken);
    formData.append("metaData", metaData);
    formData.append("file", file);
    let response = await axios.post(uploadDataAPI, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).catch(err => {
        console.log(err);
    });
    if (response === undefined) {
        return false;
    }
    if(response.data !== 0) {
        console.log(response.data);
        return false;
    }
    return true;

}

export default upload;