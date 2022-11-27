import { Container, Button, ButtonText, Input } from './styles'
import { Gradient } from '../../components/Gradient'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Text, TouchableOpacity } from 'react-native'

export const CadastraProduto = () => {
    return(
    <>
        <Container>
            <Gradient />
            <Header title={'Cadastrar Produto'} />
            <Input
                placeholder={'Nome produto'}
                placeholderTextColor={'gray'}
            />
            <Input
                placeholder={'Valor do Produto'}
                placeholderTextColor={'gray'}
            />
            <Input
                placeholder={'Quantidade em estoque'}
                placeholderTextColor={'gray'}
            />
            <Input
                placeholder={'Imagem'}
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