import React from 'react';

export default class List extends React.Component {
  render() {
    return (
        <ol>
            {
                this.props.data.map(item=> {
                    return <li>{item}</li>
                })
            }
        </ol>
    );
  }
}