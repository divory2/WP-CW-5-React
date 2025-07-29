import React,{Component} from "react";
class List extends Component {
    renderList() {
    /*
    Javascript map will let you iterate and modify each item in a list.
    In this example, we are changing each item
    (ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
    */
    const items = this.props.items.map(item => {
    return <li key={item.name}>{item.name}</li>
    });
    return items;
    }
    render() {
    return (
    <ul>
    {this.renderList()}
    </ul>
    );
    }
    }
    export default List;