import { Gradient } from '../../components/Gradient';
import { Container, Title, Logo, VoltarButton, VoltarText } from './styles';
import logo from "../../../assets/logo.jpeg";

export const SenhaAlterada = () => {
    return (
        <Container>
            <Gradient />
            <Logo source={logo} />
            <Title>
                Senha alterada <br />   com sucesso!
            </Title>
            <VoltarButton>
                <VoltarText>
                    Voltar
                </VoltarText>
            </VoltarButton>
        </Container>
    )

}