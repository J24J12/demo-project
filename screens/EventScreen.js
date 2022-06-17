import React from "react";
import { Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";


function EventScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Event</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsHome" component={EventScreen} />
    </Stack.Navigator>
  )
}