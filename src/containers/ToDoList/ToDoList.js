import React, {Component} from 'react';
import Aux from '../../utils/Wrapper';

import List from '../../components/List/List'

class ToDoList extends Component {
    render() {
        return (
            <Aux>
                <List />
            </Aux>
        );
    }
}

export default ToDoList;