
import React from "react";
import {styles} from '../../assets/css/styles';
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import * as ROUTES from '../../constants/routes'



export const Navigation   =()=>{
    return (
        <View style={styles.nav}>
        <Link to={ROUTES.HOME} underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link to={ROUTES.ABOUT} underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>About</Text>
        </Link>
        <Link to={ROUTES.TOPICS} underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Topics</Text>
        </Link>
        <Link to={ROUTES.TODOS} underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Todos</Text>
        </Link>
      </View>
    )
}