import React from 'react';
import UploadForm from "./component/uploadForm/uploadForm";
import {uploadDataAPI} from "./config";

class App extends React.Component {
  state = {
    status: 0,
    dataAPI: null
  };

  render() {
    return (<UploadForm/>);
  }
}


export default App;
