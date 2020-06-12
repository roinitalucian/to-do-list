import React, { Component } from 'react';
import Aux from '../../utils/Wrapper';
import './List.css';
import ListEntry from './ListEntry/ListEntry';
import FilterForm from './FilterForm/FilterForm';
import AddForm from './AddForm/AddForm';
import ls from 'local-storage';

class List extends Component {
    
    state = {
        toDos : [
        //  { title: 'PC Homework', description: 'Implement a router', deadline: '24/05/2020', priority: 'high', status: 'expired' },
        //  { title: 'Music system', description: 'Repair the music system cassette player', deadline: '02/04/2020', priority: 'moderate', status: 'completed' },
        //  { title: 'Eat', description: 'Eat pateu cu paine', deadline: '14/10/2019', priority: 'low', status: 'due' }
        ],

        showExpired : true,
        showCompleted : true,
        time: new Date(Date.now()),
        idMax: 0
    }

    deleteEntryHandler = (index) => {
        const toDos = [...this.state.toDos];
        toDos.splice(index, 1);
        this.setState({toDos: toDos});
        ls.set('toDos', toDos);
    }

    completeHandler = (index) => {
        const toDos = [...this.state.toDos];
        toDos[index].status = 'completed';
        this.setState({toDos: toDos});
        ls.set('toDos', toDos);
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
        // console.log(event.target.value);
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
        ls.set('toDos', toDos);
    }

    addHandler = (event) => {
        event.preventDefault();
        let new_title = event.target.title.value;
        let new_description = event.target.description.value;
        let new_date = event.target.date.value ;
        let new_priority = event.target.priority.value;
        const toDos = [...this.state.toDos];
        toDos.unshift({ id: (this.state.idMax), title: new_title, description: new_description, deadline: new_date, priority: new_priority, status: 'due' });
        this.setState({toDos: toDos, idMax: (this.state.idMax + 1)});
        ls.set('toDos', toDos);
        ls.set('idMax', this.state.idMax);
    }

    editEntryHandler = (index) => (event) => {
        event.preventDefault();
        // console.log(event);
        // console.log(index);

        let new_title = event.target.title.value;
        let new_description = event.target.description.value;
        let new_date = new Date(event.target.date.value);
        let new_priority = event.target.priority.value;
        const toDos = [...this.state.toDos];
        toDos[index].title = new_title;
        toDos[index].description = new_description;
        toDos[index].deadline = new_date;
        toDos[index].priority = new_priority;
        if (new_date > new Date(this.state.time) && toDos[index].status === 'expired') {
            toDos[index].status = 'due';
        }
        this.setState({toDos: toDos});
        ls.set('toDos', toDos);
        this.updateList();
    }

    checkExpired = (item, index) => {
        if (new Date(item.deadline) < new Date(this.state.time)) {
            item.status = 'expired';
        }
    }

    updateList = () => {
        const toDos = [...this.state.toDos];
        toDos.forEach(this.checkExpired);
        ls.set('toDos', toDos);
        return toDos;
    }

    render() {

        // maps anonymous function over the entries array to print all of them
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
                {/* {new Date(this.state.time).toString()} */}
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

    componentDidMount() {
        // the state is stored locally
        this.setState({toDos: ls.get('toDos') || [], showExpired: true, showCompleted: true, idMax: ls.get('idMax') + 1 || 0});

        // updates the state every 10 seconds
        this.interval = setInterval(() => this.setState({ time: new Date(Date.now()), toDos: this.updateList() }), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

};

export default List;