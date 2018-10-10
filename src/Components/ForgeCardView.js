import React, { Component } from 'react';

export default class ForgeCardView extends Component {
    render() {
        const { icon, name } = this.props;
        return (
            <div className="forge-card">
                <div className="icon col-sm-4">
                    <img className="card-image" src={icon} alt="icon"/>
                </div>
                <div className="title col-sm-8">
                    {name}
                </div>
            </div>
        )
    }
}