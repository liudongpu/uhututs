import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

//uhutu_sign_begin_header

//uhutu_sign_end_header



//uhutu_auto_begin_import



//uhutu_auto_end_import

import styles from "./pages/agent/theme/layout-style";



const RouteStack={
  //uhutu_auto_begin_route
  
  //uhutu_auto_end_route
  
  }
  
  




const RootNavigator = StackNavigator(RouteStack,
{
  navigationOptions:{
    headerTitleStyle:styles.theme_layout_nav_title,
    headerStyle:[styles.theme_layout_nav_header,{elevation:0}],
    
    headerBackTitle:' ',
    headerBackTitleStyle:styles.theme_layout_nav_back,
    //uhutu_sign_begin_navoption
  
    //uhutu_sign_end_navoption
  },
  //uhutu_sign_begin_navigator
  
  //uhutu_sign_end_navigator
  cardStyle:styles.theme_layout_card_main
});

export default RootNavigator;