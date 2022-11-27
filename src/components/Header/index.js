import logo from "../../../assets/logo.jpeg";
import { AntDesign } from "@expo/vector-icons";
import { Container, Title, Logo } from "./styles.js"

export const Header = ({title}) => {
    return (
        <Container>
            <AntDesign name="logout" size={24} color='black' />
        <Title>
            {title}
        </Title>
        <Logo source={logo} />
        </Container>
    )
}