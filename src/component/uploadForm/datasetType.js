import React from "react";

class DatasetTypeSelect extends React.Component{
    render() {
        return (
            <select id="uploadData-form-datasetType">
                <option value="0">Non-title, data in row</option>
                <option value="1">With title, data in row</option>
                <option value="2">With title, data in column</option>
                <option value="3">Non-title, data in column</option>
            </select>
        );
    }
}

export default DatasetTypeSelect;