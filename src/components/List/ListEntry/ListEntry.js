import React, { Component } from 'react';
import './ListEntry.css'
import Aux from '../../../hoc/Aux';

class ListEntry extends Component {

    state = {
        editMode: false
    }

    enterEditMode = () => {
        this.setState({editMode: true});
    }

    exitEditMode = () => {
        this.setState({editMode: false});
    }

    formatDate = (d) => {
        // console.log(d.getFullYear());
        let str = d.getFullYear() +'-';

        if (d.getMonth() < 9) {
            str = str + '0';
        }

        str = str + (d.getMonth() + 1) + '-';

        if (d.getDate() < 9) {
            str = str + '0';
        }

        str = str + d.getDate() + 'T';

        if (d.getHours() < 9) {
            str = str + '0';
        }

        str = str + d.getHours() + ':';

        if (d.getMinutes() < 9) {
            str = str + '0';
        }

        str = str + d.getMinutes();

        // console.log(str);
        // console.log('-' + d.getDate());
        // console.log('T' + d.getHours());
        // console.log(':' + d.getMinutes());

        return str;
    }

    saveEdit = (event) => {
        event.preventDefault();
        this.props.editEntry(event);
        this.setState({editMode: false});
    }

    render() {

        let viewMode = <Aux>
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
                            <p>{this.props.deadline.toLocaleDateString()} {this.props.deadline.toLocaleTimeString()}</p>
                        </div>
                        <div className='ml-auto'>
                            <div className='dropdown'>
                                <div data-toggle='dropdown'>
                                    <p align='right'><i className='fas fa-bars' style={{fontSize:2.5+'vh'}} ></i></p>
                                </div>
                                <div className='dropdown-menu'>
                                    <div className='dropdown-item' onClick={this.enterEditMode}>Edit</div>
                                    <div className='dropdown-item' onClick={this.props.clickDelete}>Delete</div>
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
        </Aux>;

        let editMode = <Aux>
        <form onSubmit={this.saveEdit}>
        <div className='container'>
            <div className={'card list-entry ' + this.props.status}>
                <div className='card-body'>
                    <div className='d-flex'>
                        <div>
                            <h4 className='card-title'>
                                <input className='form-control' type='text' name='title' defaultValue={this.props.title}/>
                            </h4>
                            <p className='card-text'>
                                <textarea className='form-control' name='description' defaultValue={this.props.description} />
                            </p>
                            <p>
                                <input className='form-control form-control-sm' type='datetime-local'
                                id='dateSelect' name='date' defaultValue={this.formatDate(this.props.deadline)} />
                            </p>
                        </div>
                        <div className='ml-auto'>
                            <div className='dropdown'>
                                <div data-toggle='dropdown'>
                                    <p align='right'><i className='fas fa-bars' style={{fontSize:2.5+'vh'}} ></i></p>
                                </div>
                                <div className='dropdown-menu'>
                                    <div className='dropdown-item'>Edit</div>
                                    <div className='dropdown-item' onClick={this.props.clickDelete}>Delete</div>
                                </div>
                            </div>
                            <p className='form-inline' align='right'>Priority: 
                            <select className='marginLeft form-control form-control-sm' id='prioritySelect'
                            defaultValue={this.props.priority}  name='priority'>
                                <option value='low'>low</option>
                                <option value='moderate'>moderate</option>
                                <option value='high'>high</option>
                            </select>
                             </p>
                             <div className='marginRightZero'>
                                <button type='button' className={'marginRight btn'} onClick={this.exitEditMode}>
                                    Cancel
                                </button>
                                <input type='submit' className={'btn'} value='Save' />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
        </Aux>;

        let selectedMode = viewMode;
        if (this.state.editMode) {
            selectedMode = editMode;
        } else {
            selectedMode = viewMode;
        }

        return (
            selectedMode
        );
    }
};

export default ListEntry;