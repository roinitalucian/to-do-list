import React, { Component } from 'react';
import './FilterForm.css'
import Aux from '../../../hoc/Aux';

class FilterForm extends Component {

    state = {
        value : 'default'
    }

    render() {
        return(
            <Aux>
            <div className='container'>
                <div className='d-flex justify-content-end'>
                    <div>
                        <input type='checkbox' id='showExpired' className='checkLabel' onChange={this.props.showExpiredClick} />
                        <label htmlFor='showExpired' className='checkLabel'>Hide expired</label><br />
                    </div>
                    <div>
                        <input type='checkbox' id='showCompleted' className='checkLabel' onChange={this.props.showCompletedClick} />
                        <label htmlFor='showCompleted' className='checkLabel'>Hide completed</label><br />
                    </div>
                    <div>
                        <label htmlFor='sortBy' className='checkLabel'>Sort by:</label>
                        <select id='sortBy' className='checkLabel' onChange={this.props.sort}>
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