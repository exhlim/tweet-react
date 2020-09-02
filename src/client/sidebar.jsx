var React = require("react");
import SidebarOptions from "./sidebarOptions"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';


export default class Sidebar extends React.Component {
  render() {
    const button = {
        border: 'none',
        color: 'white',
        fontWeight: '900',
        fontSize: '20px',
        padding: '10px',
        width: '250px',
        backgroundColor: '#00acee',
        borderRadius: '30px',
    }
    const sidebar = {
        height: '100vh',
        fontWeight: 'bold',
        borderRight: '2px solid lightgrey',
        flex: '0.2',
        paddingLeft: '150px',
    }
    return (
        <div style={sidebar}>
          <SidebarOptions Icon={TwitterIcon} text=""/>
          <SidebarOptions Icon={HomeRoundedIcon} text="Home"/>
          <SidebarOptions Icon={PersonIcon} text="Profile"/>
          <SidebarOptions Icon={NotificationsIcon} text="Notification"/>
          <button style={button}>Tweet</button>
        </div>
    )
  }
};