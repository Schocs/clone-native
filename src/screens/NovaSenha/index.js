import { Gradient } from "../../components/Gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import logo from "../../../assets/logo.jpeg";
import { Container, Logo, Title, InputLogin, InputPassword, LoginButton, LoginText, Header } from "./styles";
import { AntDesign } from '@expo/vector-icons';

export const NovaSenha = () => {
  
  const [user, setUser] = useState({
    password: '',
  });

  return (
    <Container>
        <Gradient />
        <Header>
            <AntDesign name="back" size={24} color="black" />
        </Header>
        <Logo source={logo}/>
        <Title>Criar Senha</Title>
        <InputLogin
            value={user.password}
            onChangeText={setUser}
            placeholder={'Digite seu Senha'}
            placeholderTextColor={'gray'}
        />
        <InputPassword
            value={user.password}
            onChangeText={setUser}
            placeholder={'Repita sua Senha'}
            placeholderTextColor={'gray'}
        />
        <LoginButton>
            <LoginText>Alterar</LoginText>
        </LoginButton>
        <StatusBar style="auto" />
        </Container>
  );
}