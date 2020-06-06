import React, { Component } from 'react';
import './ListEntry.css'
import Aux from '../../../hoc/Aux';

class ListEntry extends Component {
    render() {
        return (
            <Aux>
            <div className='container'>
                <div className={'card list-entry ' + this.props.status}>
                    <div className='card-body'>
                        <h4 className='card-title'>
                            {this.props.title}
                        </h4>
                        <p className='card-text'>
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </div>
            </Aux>
        );
    }
};

export default ListEntry;