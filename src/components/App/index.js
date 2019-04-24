import React from "react";
import { View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import {styles} from '../../assets/css/styles';
import { About } from "../About";
import { Home } from "../Home";
import { Topics } from "../Topics";
import { Navigation } from "../Navigation";
import Todo from "../Todo";
import * as ROUTES from '../../constants/routes'


export const App = () => (
  <NativeRouter>
    <View style={{flex:1}}>
    <View style={{flex: 1 , backgroundColor: "green", paddingTop: 20}}>
      <Navigation/>
    </View>
    <View style={{flex: 5}}>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.TODOS} component={Todo} />
      <Route path={ROUTES.TOPICS} component={Topics} />
    </View>
    </View>
  </NativeRouter>
);
