import { Gradient } from '../../components/Gradient'
import { Container, Title, Logo, InputCpf, RecuperarButton, Header, RecuperarText } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import logo from "../../../assets/logo.jpeg";

export const RecuperarSenha = () => {
    
    const [user, setUser] = useState({
        cpf: ''
      });
    

    return (
        <Container>
            <Gradient />
            <Header>
                <AntDesign name="back" size={24} color="black" />
            </Header>
            <Logo source={logo}/>
            <Title>
                Recuperar Senha
            </Title>
            <InputCpf
                value={user.cpf}
                onChangeText={setUser}
                placeholder={'Digite seu CPF'}
                placeholderTextColor={'gray'}
            />
            <RecuperarButton>
                <RecuperarText>Recuperar</RecuperarText>
            </RecuperarButton>
        </Container>
    )
}