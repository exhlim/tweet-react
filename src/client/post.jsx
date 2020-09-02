var React = require("react");
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
export default class Post extends React.Component {
  render() {
    const postComponent = {
        width: "inherit",
        border: '1px solid lightgrey',
        margin: '5px',
        borderRadius: '10px',
        padding: '10px'
    }
    const user = {
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: '10px'
    }
    const screen_name = {
        color: 'grey',
    }
    console.log(this.props.object)
    return (
            <div style={postComponent}>
                <div style={user}>{this.props.object.user.name} <span style={screen_name}><CheckCircleIcon />@{this.props.object.user.screen_name}</span></div>
                <div>{this.props.object.text}</div>
            </div>
    )
  }
};