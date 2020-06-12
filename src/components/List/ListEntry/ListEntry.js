import React, { Component } from 'react';
import './ListEntry.css'
import Aux from '../../../utils/Wrapper';

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

    // this function was needed in order to properly parse the dates
    formatDate = (d) => {
        // console.log(d.getFullYear());
        let str = d.getFullYear() +'-';

        if (d.getMonth() < 9) {
            str = str + '0';
        }

        str = str + (d.getMonth() + 1) + '-';

        if (d.getDate() < 10) {
            str = str + '0';
        }

        str = str + d.getDate() + 'T';

        if (d.getHours() < 10) {
            str = str + '0';
        }

        str = str + d.getHours() + ':';

        if (d.getMinutes() < 10) {
            str = str + '0';
        }

        str = str + d.getMinutes();
        // console.log(d);
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
        let formattedDate = new Date(this.props.deadline);
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
                            <p>{formattedDate.toLocaleDateString()} {formattedDate.toLocaleTimeString()}</p>
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
                            <button type='button' className={'btnSize btn ' + this.props.status + '-btn'} onClick={this.props.clickComplete}>
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
                                id='dateSelect' name='date' defaultValue={this.formatDate(formattedDate)} />
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
                                <button type='button' className={'btnSize marginRight btn'} onClick={this.exitEditMode}>
                                    Cancel
                                </button>
                                <input type='submit' className={'btnSize btn'} value='Save' />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
        </Aux>;

        // editMode decides which of the 2 modes described above is selected
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