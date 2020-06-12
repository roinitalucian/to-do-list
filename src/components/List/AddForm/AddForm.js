import React, { Component } from 'react';
import './AddForm.css'
import Aux from '../../../utils/Wrapper';

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
            <form onSubmit={this.props.addClick.bind(this)} id='addForm'>

            <div className='container'>
                <div id='demo' className='collapse'>
                    <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Title' name='title' required />
                    </div>
                    <div className='form-group'>
                        <textarea rows='4' className='form-control' placeholder='Description' name='description' required />
                    </div>
                    <div className='form-group'>
                        <div className='form-inline'>
                            <label htmlFor='prioritySelect' className='marginRight'>Priority:</label>
                            <select className='form-control form-control-sm marginRight' id='prioritySelect'
                            defaultValue='moderate' name='priority'>
                                <option value='low'>low</option>
                                <option value='moderate'>moderate</option>
                                <option value='high'>high</option>
                            </select>

                            <label htmlFor='dateSelect' className='marginRight'>Due date:</label>
                            <input className='form-control form-control-sm' type='datetime-local' id='dateSelect' name='date' required />
                        </div>
                    </div>

                </div>
                <div className='form-group'>
                    <i type='button' className='fa fa-plus-square' aria-hidden='true' data-toggle='collapse'
                    data-target='#demo' style={{fontSize:6+'vh'}} onClick={this.reverseButton} id='plusButton' />
                    <button type='submit' className='fa fa-plus-square' aria-hidden='true'
                    style={{fontSize:6+'vh'}}  id='submitButton' value='add'/>
                </div>
            </div>
            </form>

            </Aux>
        );
    }
}

export default AddForm;