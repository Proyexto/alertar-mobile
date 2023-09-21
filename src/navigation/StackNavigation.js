import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Loading, Login, Home, CodeBlue } from "../screens";
import routes from "./routes.json";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  // const goToPage = (page) => {
  //   navigation.navigate(page);
  // };
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name={routes.loading} component={Loading} />
      <Stack.Screen name={routes.login} component={Login} />
      <Stack.Screen name={routes.home} component={Home} />
      <Stack.Screen name={routes.codeBlue} component={CodeBlue} />
    </Stack.Navigator>
  );
}
