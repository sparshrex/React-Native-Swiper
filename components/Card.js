import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("screen");


const Card = ({
  name,
  age,
  location,
  distance,
  image,
  isFirst,
  swipe,
  titlSign,
  ...rest
}) => {
  
  const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["8deg", "0deg", "-8deg"],
  });

  
  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}
    >
      <Image source={image} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,.9)"]}
        style={styles.gradient}
      />
      <View style={styles.userContainer}>
        <Text style={styles.name}>{name} </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 25,
  },
  image: {
    width: width * 0.9,
    height: height * 0.78,
    borderRadius: 20,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    borderRadius: 20,
  },
  userContainer: {
    position: "absolute",
    bottom: 24,
    left: 24,
  },
  name: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "400",
  },
});

export default Card;
