import { Gradient } from '../../components/Gradient';
import { Container, Title, Logo, VoltarButton, VoltarText } from './styles';
import logo from "../../../assets/logo.jpeg";

export const CompraEfetuada = () => {
    return (
        <Container>
            <Gradient />
            <Logo source={logo} />
            <Title>
                Compra efetuada <br />   com sucesso!
            </Title>
            <VoltarButton>
                <VoltarText>
                    Voltar
                </VoltarText>
            </VoltarButton>
        </Container>
    )

}