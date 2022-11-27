import { Container, Button, ButtonText, Input } from './styles'
import { Gradient } from '../../components/Gradient'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Text, TouchableOpacity } from 'react-native'

export const Cadastro = () => {
    return(
    <>
        <Container>
            <Gradient />
            <Header title={'Cadastro'} />
            <Input
                placeholder={'Nome'}
                placeholderTextColor={'gray'}
            />
            <Input
                placeholder={'CPF'}
                placeholderTextColor={'gray'}
            />
            <Input
                placeholder={'Data de Nascimento'}
                placeholderTextColor={'gray'}
            />
            <Input
                placeholder={'Senha'}
                placeholderTextColor={'gray'}
            />
            <Input
                placeholder={'Confirmar Senha'}
                placeholderTextColor={'gray'}
            />
            <TouchableOpacity>
                <Text style={{color: 'navy'}}>
                    Selecionar imagem
                </Text>
            </TouchableOpacity>
            <Button>
                <ButtonText>
                    Cadastrar
                </ButtonText>
            </Button>
        </Container>
        <Footer />
    </>
   ) 
}