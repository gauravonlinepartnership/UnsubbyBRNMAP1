import * as React from 'react';
import { View, Text } from 'react-native';
// import { createStaticNavigation } from '@react-navigation/native';
import { NavigationContainer,Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import AsyncStorage from '@react-native-async-storage/async-storage';



function HomeScreen() {

          const storeData = async (value: string) => {
            try {
              await AsyncStorage.setItem('my-key', value);
            } catch (e) {
              // saving error
            }
          };

          const storeData2 = async (value) => {
            try {
              const jsonValue = JSON.stringify(value);
              await AsyncStorage.setItem('my-key', jsonValue);
            } catch (e) {
              // saving error
            }
          };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Link screen="Details"  params={{}} >
      Go to Details
      </Link>
      <Button screen="Details"  params={{}}>Go to Details</Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
