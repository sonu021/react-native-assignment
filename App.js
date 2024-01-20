// App.js
import React, { useState } from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './App/Screen/ListScreen';
import DetailScreen from './App/Screen/DetailScreen';
import { StatusBar, Theme } from 'react-native-basic-elements';
import { View } from 'react-native';
import { COLORS } from './App/Components/Constants/Colors';
import AddProduct from './App/Screen/AddProduct';


const Stack = createStackNavigator();

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <View
      style={{
        flex: 1
      }}
    >
    
      <Theme.Provider
        theme={{
          light: {
            primaryThemeColor: COLORS.primaryThemeColor,
            secondaryThemeColor: COLORS.secondaryThemeColor,
            primaryFontColor: COLORS.primaryFontColor,
            secondaryFontColor: COLORS.secondaryFontColor,
            cardColor: COLORS.cardColor,
            headerColor: COLORS.headerColor,
            pageBackgroundColor: COLORS.pageBackgroundColor,
            buttonColor: COLORS.buttonColor,
            borderColor: COLORS.borderColor
          },
          dark: {
            primaryThemeColor: COLORS.primaryThemeColor,
            secondaryThemeColor: COLORS.secondaryThemeColor,
            primaryFontColor: COLORS.primaryFontColor,
            secondaryFontColor: COLORS.secondaryFontColor,
            cardColor: COLORS.cardColor,
            headerColor: COLORS.headerColor,
            pageBackgroundColor: COLORS.pageBackgroundColor,
            buttonColor: COLORS.buttonColor,
            borderColor: COLORS.borderColor
          },
        }}
        mode={isDark ? 'dark' : 'light'}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ListScreen"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="ListScreen" component={ListScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            <Stack.Screen name="AddProduct" component={AddProduct} />

          </Stack.Navigator>
        </NavigationContainer>
      </Theme.Provider>
    </View>

  );
};

export default App;
