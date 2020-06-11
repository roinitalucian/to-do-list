import React, { Component } from 'react';
import './ListEntry.css'
import Aux from '../../../hoc/Aux';

class ListEntry extends Component {
    render() {

        let st = this.props.status;

        return (
            <Aux>
            <div className='container'>
                <div className={'card list-entry ' + this.props.status}>
                    <div className='card-body'>
                        <div className='d-flex'>
                            <div>
                                <h4 className='card-title'>
                                    {this.props.title}
                                </h4>
                                <p className='card-text'>
                                    {this.props.description}
                                </p>
                                <p>data</p>
                            </div>
                            <div className='ml-auto'>
                                <div className='dropdown'>
                                    <a data-toggle='dropdown'>
                                        <p align='right'><i className='fas fa-bars' style={{fontSize:2+'vh'}} ></i></p>
                                    </a>
                                    <div className='dropdown-menu'>
                                        <a className='dropdown-item' href='#'>Edit</a>
                                        <a className='dropdown-item' href='#' onClick={this.props.clickDelete}>Delete</a>
                                    </div>
                                </div>
                                <p align='right'>Priority: <span className={'pr-text ' + this.props.priority}>{this.props.priority}</span></p>
                                <button type='button' className={'btn ' + this.props.status + '-btn'} onClick={this.props.clickComplete}>
                                    Mark as completed
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Aux>
        );
    }
};

export default ListEntry;