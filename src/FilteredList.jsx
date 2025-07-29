import React, { Component } from "react";
import List from "./List";
import { DropdownButton, Dropdown } from 'react-bootstrap';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  onsearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }

  onclickhandle = (eventKey) => {
    this.setState({ type: eventKey });
  }

  filteritem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = (this.state.type === "all") || (item.type === this.state.type);
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <input type="text" placeholder="Search" onChange={this.onsearch} />
        
        <DropdownButton
          id="typeDropdown"
          title={this.state.type === "all" ? "All" : this.state.type}
          onSelect={this.onclickhandle}
          
        >
          <Dropdown.Item className="dropdown-fields" eventKey="all">All</Dropdown.Item>
          <Dropdown.Item className="dropdown-fields" eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item className="dropdown-fields" eventKey="Vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>

        <List items={this.props.items.filter(this.filteritem)} />
      </div>
    );
  }
}

export default FilteredList;
