import React from "react";

class Publicity extends React.Component{
    render() {
        let renderItems = [];
        renderItems.push(
            <div>
                <input type={"radio"} name={"publicity"} id={"uploadData-form-publicity-public"} value={"1"} checked={true}/> Public
            </div>
            );
        renderItems.push(
            <div>
                <input type={"radio"} name={"publicity"} id={"uploadData-form-publicity-private"} value={"0"}/> Private
            </div>
        );
        return renderItems;
    }
}


export function checkIfPublic() {
    if (document.getElementById("uploadData-form-publicity-public").checked) {
        return 1;
    }
    return 0;
}
export default Publicity;