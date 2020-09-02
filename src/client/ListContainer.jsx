import React from "react";
import List from "./List"

export default class ListContainer extends React.Component {
    render() {
    const data = ["A", "B", "C", "D", "e", "asd", "asdazxc", "asdasdasczxc"];
        return(
            <List data={data}/>
            )
    }
}