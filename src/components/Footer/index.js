import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { BotaoFooter, Container } from "./styles";


export const Footer = () => {

  return (
    <Container>
      <TouchableOpacity>
        <BotaoFooter style={{ borderRightWidth: 1, paddingRight: 35 }}>
          <AntDesign name="home" size={24} color="black" />
        </BotaoFooter>
      </TouchableOpacity>
      <TouchableOpacity >
        <BotaoFooter style={{ borderRightWidth: 1, paddingRight: 35 }}>
            <MaterialIcons name="shopping-bag" size={24} color="black" />
        </BotaoFooter>
      </TouchableOpacity>
      <TouchableOpacity >
        <BotaoFooter style={{ borderRightWidth: 1, paddingRight: 35 }}>
            <AntDesign name="staro" size={24} color="black" />
        </BotaoFooter>
      </TouchableOpacity>
      <TouchableOpacity >
        <BotaoFooter>
          <Text style={{ fontSize: 24 }}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </Text>
        </BotaoFooter>
      </TouchableOpacity>
    </Container>
  );
};
