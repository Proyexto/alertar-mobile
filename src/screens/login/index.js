import { useState } from "react";
import { View, SafeAreaView, TextInput, Text, Button } from "react-native";
import CheckBox from "react-native-check-box";

export const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "asda",
    password: "",
    isChecked: "",
  });

  const handleUsername = (text) => {
    setLoginForm({
      ...loginForm,
      username: text,
    });
  };

  const handlePassword = (text) => {
    setLoginForm({
      ...loginForm,
      password: text,
    });
  };

  const onCheck = () => {
    setLoginForm({
      ...loginForm,
      isChecked: !loginForm.isChecked,
    });
  };

  return (
    <SafeAreaView>
      <TextInput
        value={loginForm.username}
        onChangeText={(text) => handleUsername(text)}
      />
      <TextInput
        secureTextEntry={true}
        value={loginForm.password}
        onChangeText={(text) => handlePassword(text)}
      />
      <View>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => {
            onCheck();
          }}
          isChecked={loginForm.isChecked}
          rightText={"CheckBox"}
        />
        <Text>Mantener Sesión</Text>
      </View>
      <Button title="Enviar" />
    </SafeAreaView>
  );
};
