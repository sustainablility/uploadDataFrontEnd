import upload from "../comunicateToBackend/uploadDataset";
async function uploadDataHooker() {
    let dataName = document.getElementById("uploadData-form-dataName").value;
    let dataType = document.getElementById("uploadData-form-datasetType").value;
    let file = document.getElementById("uploadData-form-file").files[0];
    if (! await upload(dataName, dataType, file)) {
        console.log("Cannot upload");
        return null;
    }
    console.log("Done");


}
export default uploadDataHooker;