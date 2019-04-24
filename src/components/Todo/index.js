import React, {Component} from 'react';
import {styles} from '../../assets/css/styles';
import { View, Text } from 'react-native';

const INITIAL_STATE={
    test: '',
    description: '',
    todos: [],
}

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}
    }
    render() { 
        return ( 
            <View>
                <Text style={styles.header}>Todos</Text>
            </View>
         );
    }
}
 
export default Todo;