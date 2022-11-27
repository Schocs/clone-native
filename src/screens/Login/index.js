import { Gradient } from "../../components/Gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.jpeg";
import { Container, Logo, Title, InputLogin, InputPassword, Recover, LoginButton, LoginText } from "./styles";

export const Login = () => {
  
  const [user, setUser] = useState({
    login: '',
    password: '',
  });

  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Login</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Digite seu Login'}
        placeholderTextColor={'gray'}
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua Senha'}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity>
        <Recover>Esqueceu sua senha? Clique aqui</Recover>
      </TouchableOpacity>
      <LoginButton>
        <LoginText>ENTRAR</LoginText>
      </LoginButton>
      <TouchableOpacity>
        <Recover >Não possui cadastro? Cadastre-se!</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}