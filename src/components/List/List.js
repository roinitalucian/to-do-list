import React, { Component } from 'react';
import ListEntry from './ListEntry/ListEntry';

class List extends Component {
    
    state = {
        toDos : [
         { title: 'PC Homework', description: 'Implement a router', deadline: '24/05/2020', priority: 'high', status: 'expired' },
         { title: 'Music system', description: 'Repair the music system cassette player', deadline: '02/04/2020', priority: 'medium', status: 'completed' },
         { title: 'Eat', description: 'Eat pateu cu paine', deadline: '14/10/2019', priority: 'low', status: 'due' }
        ]
    }

    render() {

        let list = this.state.toDos.map(entry => {
            return <ListEntry title={entry.title} description={entry.description}
            deadline={entry.deadline} priority={entry.priority} status={entry.status} />
        });

        return (
            list
        );
    }

};

export default List;