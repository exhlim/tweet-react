var React = require("react");
import Sidebar from "./sidebar";
import Feed from "./feed";
export default class HomePage extends React.Component {
  render() {
    const page = {
        margin: '0',
        display: 'flex'
    }
    return (
            <div style={page}>
              <Sidebar  />
              <Feed />
            </div>
    )
  }
};