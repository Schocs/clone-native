import { Gradient } from '../../components/Gradient';
import { Container, Title, Logo, VoltarButton, VoltarText } from './styles';
import logo from "../../../assets/logo.jpeg";

export const UsuarioCadastrado = () => {
    return (
        <Container>
            <Gradient />
            <Logo source={logo} />
            <Title>
                Usuário cadastrado <br />   com sucesso!
            </Title>
            <VoltarButton>
                <VoltarText>
                    Voltar
                </VoltarText>
            </VoltarButton>
        </Container>
    )

}