import React from "react";

class MetaData extends React.Component{
    render() {
        let renderItems = [];
        renderItems.push(<div>Metadata: </div>);
        renderItems.push(<textarea id={"uploadData-form-metaData"}></textarea>);
        return renderItems;
    }
}
export default MetaData;