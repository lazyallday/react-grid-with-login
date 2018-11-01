import React, { Component } from 'react';
import './Grid.css';
import data from '../assets/data';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = { data: data.data };
    }

    componentDidMount() {

    }

    render() {
        let list = [...this.state.data];
        const unit = list.map((item, index) => <li key={index}>
            {item.type}
        </li>
        );
        return (
            <div className="Grid">
                <h2>The list is below here</h2>
                <div className="list-group-item-heading">
                    {unit}
                </div>
            </div>
        );
    }
}

export default Grid;
