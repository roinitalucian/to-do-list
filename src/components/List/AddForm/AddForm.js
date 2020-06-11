import React, { Component } from 'react';
import './AddForm.css'
import Aux from '../../../hoc/Aux';

class AddForm extends Component {

    reverseButton = () => {
        let b = document.getElementById('plusButton');
        let b2 = document.getElementById('submitButton');
        if (b.className === 'fa fa-plus-square') {
            b.className = 'fa fa-minus-square';
            b2.style.display = 'initial';
        } else {
            b.className = 'fa fa-plus-square';
            b2.style.display = 'none';
        }
    }

    render() {
        return(
            <Aux>
            <div className='container'>
                <div id='demo' className='collapse'>
                    <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Title' name='title' />
                    </div>
                    <div className='form-group'>
                        <textarea rows='4' className='form-control' placeholder='Description' name='description' />
                    </div>
                    <div className='form-group'>
                    <form className='form-inline'>
                        <label htmlFor="prioritySelect" className='marginRight'>Priority:</label>
                        <select className="form-control form-control-sm" id='prioritySelect' name='priority'>
                            <option>low</option>
                            <option>moderate</option>
                            <option>high</option>
                        </select>

                        <label htmlFor="dateSelect" className='marginRight marginLeft'>Due date:</label>
                        <input className='form-control form-control-sm' type='date' id='dateSelect' name='date' />


                    </form>
                </div>

                </div>
                <div className='form-group'>
                    <i type='button' className='fa fa-plus-square' aria-hidden='true' data-toggle='collapse'
                    data-target='#demo' style={{fontSize:7+'vh'}} onClick={this.reverseButton} id='plusButton' />
                    <i type='button' className='fa fa-plus-square' aria-hidden='true'
                    style={{fontSize:7+'vh'}}  id='submitButton' />
                </div>
            </div>

            </Aux>
        );
    }
}

export default AddForm;