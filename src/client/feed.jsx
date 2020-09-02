var React = require("react");
import Tweetbox from './tweetbox';
import Post from './post';
export default class Feed extends React.Component {
  render() {
        const tweets = [{
            "created_at":"Tue May 01 05:49:13 +0000 2018",
            "text":"Making of ye vs the people        https://t.co/1xvft3175J",
            "user":{
                "id":169686021,
                "id_str":"169686021",
                "name":"KANYE WEST",
                "screen_name":"kanyewest",
            },
        }, {
            "created_at":"Tue May 01 05:49:13 +0000 2018",
            "text":"stop thinking about things for a long time without saying what you think",
            "user":{
                "id":169686021,
                "id_str":"169686021",
                "name":"KANYE WEST",
                "screen_name":"kanyewest",
            },
        },{
            "created_at":"Tue May 01 05:49:13 +0000 2018",
            "text":"Open letter from Jan Adams  This is amazing. Thank you so much for this connection brother. I cant wait to sit with you and start healing",
            "user":{
                "id":169686021,
                "id_str":"169686021",
                "name":"KANYE WEST",
                "screen_name":"kanyewest",
            },
        }]
        const feed = {
            flex: '0.5',
            borderRight: '2px solid lightgrey'
        }
        const feedHeader = {
            padding: '15px 20px',
            margin: '0',
            borderBottom: '2px solid lightgrey',
            textAlign: 'center'
        }
    return (
            <div style={feed}>
                <h2 style={feedHeader}>Home</h2>
                <Tweetbox />
                {tweets.map(item => (
                <Post object={item} />
                        ))}
            </div>
    )
  }
};