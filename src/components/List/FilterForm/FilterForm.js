import React, { Component } from 'react';
import './FilterForm.css'
import Aux from '../../../utils/Wrapper';

class FilterForm extends Component {

    state = {
        value : 'default'
    }

    render() {
        return(
            <Aux>
            <div className='container'>
                <div className='d-md-flex justify-content-end'>
                    <div>
                        <input type='checkbox' id='showExpired' className='checkLabel' onChange={this.props.showExpiredClick} />
                        <label htmlFor='showExpired' className='checkLabel labelHide'>Hide expired</label><br />
                    </div>
                    <div>
                        <input type='checkbox' id='showCompleted' className='checkLabel' onChange={this.props.showCompletedClick} />
                        <label htmlFor='showCompleted' className='checkLabel labelHide'>Hide completed</label><br />
                    </div>
                    <div>
                        <label htmlFor='sortBy' className='checkLabel labelHide'>Sort by:</label>
                        <select id='sortBy' className='checkLabel labelHide' onChange={this.props.sort}>
                            <option value='default'>default</option>
                            <option value='date'>due date</option>
                            <option value='priority'>priority</option>
                        </select>
                    </div>    
                </div>

            </div>

            </Aux>
        );
    }
}

export default FilterForm;