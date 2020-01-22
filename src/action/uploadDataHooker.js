import upload from "../comunicateToBackend/uploadDataset";
import {checkIfPublic} from "../component/uploadForm/publicity";

async function uploadDataHooker() {
    let dataName = document.getElementById("uploadData-form-dataName").value;
    let dataType = document.getElementById("uploadData-form-datasetType").value;
    let file = document.getElementById("uploadData-form-file").files[0];
    let publicity = checkIfPublic();
    let metaData = document.getElementById("uploadData-form-metaData").value;
    let userToken = "yjk12rp45ghz5a1yp8jyv";
    if (! await upload(dataName, dataType, file, publicity, userToken, metaData)) {
        console.log("Cannot upload");
        return null;
    }
    console.log("Done");


}
export default uploadDataHooker;