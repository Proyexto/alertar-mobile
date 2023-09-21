import { withExpoSnack } from "nativewind";

import { Image, StyleSheet, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledImage = styled(Image);

export const Loading = () => {
  return (
    <StyledView style={styles.container}>
      <StyledImage
        source={require("../../../assets/icon.png")}
        className="w-3/4 h-52"
        style={styles.image}
      />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1593D1",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withExpoSnack(Loading);
