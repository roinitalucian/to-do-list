import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import ListEntry from './ListEntry/ListEntry';
import FilterForm from './FilterForm/FilterForm';
import AddForm from './AddForm/AddForm';

class List extends Component {
    
    state = {
        toDos : [
         { title: 'PC Homework', description: 'Implement a router', deadline: '24/05/2020', priority: 'high', status: 'expired' },
         { title: 'Music system', description: 'Repair the music system cassette player', deadline: '02/04/2020', priority: 'moderate', status: 'completed' },
         { title: 'Eat', description: 'Eat pateu cu paine', deadline: '14/10/2019', priority: 'low', status: 'due' }
        ],

        showExpired : true,
        showCompleted : true
    }

    deleteEntryHandler = (index) => {
        const toDos = [...this.state.toDos];
        toDos.splice(index, 1);
        this.setState({toDos: toDos});
    }

    completeHandler = (index) => {
        const toDos = [...this.state.toDos];
        toDos[index].status = 'completed';
        this.setState({toDos: toDos});
    }

    showExpiredHandler = () => {
        this.setState({showExpired: !this.state.showExpired});
        // document.getElementById('showExpired').checked = false;
    }

    showCompletedHandler = () => {
        this.setState({showCompleted: !this.state.showCompleted});
    }

    prioritySort (a, b) {
        if (a.priority === b.priority) {
            return 0;
        } else if (a.priority === 'high' || (a.priority === 'moderate' && b.priority === 'low')) {
            return -1;
        } else {
            return 1;
        }
    }

    sortHandler = (event) => {
        console.log(event.target.value);
        const toDos = [...this.state.toDos];
        switch (event.target.value) {
            case 'priority':
                toDos.sort(this.prioritySort);
                break;
        }
        this.setState({toDos: toDos});
    }

    render() {

        let list = this.state.toDos.map((entry, index) => {
            if (this.state.showExpired === false && entry.status === 'expired') {
                return null;
            }

            if (this.state.showCompleted === false && entry.status === 'completed') {
                return null;
            }

            return <ListEntry
            clickDelete = {() => this.deleteEntryHandler(index)}
            clickComplete = {() => this.completeHandler(index)}
            title={entry.title}
            description={entry.description}
            deadline={entry.deadline}
            priority={entry.priority}
            status={entry.status} />
        });

        return (
            <Aux>
                <AddForm />

                <FilterForm
                showExpiredClick = {this.showExpiredHandler}
                showCompletedClick = {this.showCompletedHandler}
                sort = {this.sortHandler}
                />
                {list}
            </Aux>
        );
    }

};

export default List;