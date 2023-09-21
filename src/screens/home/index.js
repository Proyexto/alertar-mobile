import { SafeAreaView, Button } from "react-native";
import React from "react";
/* import PropTypes from 'prop-types' */

const Home = (props) => {
  const goToHome = (page) => {
    props.navigation.navigate(page);
  };
  return (
    <SafeAreaView>
      <Button title="Calendario" onPress={() => goToHome("Calendario")} />
      <Button title="Inventario" onPress={() => goToHome("Inventario")} />
      <Button title="Alarmas" onPress={() => goToHome("Alarmas")} />
      <Button title="Notas" onPress={() => goToHome("Notas")} />
    </SafeAreaView>
  );
};

export default Home;
