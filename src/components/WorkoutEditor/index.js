import React, { useState, useEffect } from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
//import Tab1 from './Tab1';
//import Tab2 from './Tab2';
//import { Button } from 'react-native-elements';
import TabsWorkoutsEditor from '../../routes/TabsWokoutsEditor';

export default function WorkoutEditor() {
  //const [tab, setTab] = useState(0);

  //const view = tab === 0 ? <Tab1 /> : <Tab2 />;

  //return <View style={{ flex: 1 }}>{view}</View>;

  return <TabsWorkoutsEditor />;
}
