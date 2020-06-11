import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

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