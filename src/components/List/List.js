import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import ListEntry from './ListEntry/ListEntry';
import FilterForm from './FilterForm/FilterForm';
import AddForm from './AddForm/AddForm';

class List extends Component {
    
    state = {
        toDos : [
        //  { title: 'PC Homework', description: 'Implement a router', deadline: '24/05/2020', priority: 'high', status: 'expired' },
        //  { title: 'Music system', description: 'Repair the music system cassette player', deadline: '02/04/2020', priority: 'moderate', status: 'completed' },
        //  { title: 'Eat', description: 'Eat pateu cu paine', deadline: '14/10/2019', priority: 'low', status: 'due' }
        ],

        showExpired : true,
        showCompleted : true
    }

    idMax = 0;

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

    deadlineSort(a, b) {
        if (a.deadline < b.deadline) {
            return -1;
        } else {
            return 1;
        }
    }

    defaultSort(a, b) {
        if (a.id > b.id) {
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
            case 'date':
                toDos.sort(this.deadlineSort);
                break;
            default:
                toDos.sort(this.defaultSort);
                break;
        }
        this.setState({toDos: toDos});
    }

    addHandler = (event) => {
        event.preventDefault();
        let new_title = event.target.title.value;
        let new_description = event.target.description.value;
        let new_date = new Date(event.target.date.value);
        let new_priority = event.target.priority.value;
        const toDos = [...this.state.toDos];
        toDos.unshift({ id: (this.idMax++), title: new_title, description: new_description, deadline: new_date, priority: new_priority, status: 'due' });
        this.setState({toDos: toDos});
    }

    editEntryHandler = (index) => (event) => {
        event.preventDefault();
        console.log(event);
        console.log(index);

        let new_title = event.target.title.value;
        let new_description = event.target.description.value;
        let new_date = new Date(event.target.date.value);
        let new_priority = event.target.priority.value;
        const toDos = [...this.state.toDos];
        toDos[index].title = new_title;
        toDos[index].description = new_description;
        toDos[index].deadline = new_date;
        toDos[index].priority = new_priority;
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
            clickDelete={() => this.deleteEntryHandler(index)}
            clickComplete={() => this.completeHandler(index)}
            title={entry.title}
            description={entry.description}
            deadline={entry.deadline}
            priority={entry.priority}
            status={entry.status}
            editEntry={this.editEntryHandler(index)}
            key={entry.id} />
        });

        return (
            <Aux>
                <AddForm addClick={this.addHandler} />

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