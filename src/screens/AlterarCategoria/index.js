import { Container, Button, ButtonText, Input } from './styles'
import { Gradient } from '../../components/Gradient'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Text, TouchableOpacity } from 'react-native'

export const AlterarCategoria = () => {
    return(
    <>
        <Container>
            <Gradient />
            <Header title={'Alterar Categoria'} />
            <Input
                placeholder={'Nome categoria'}
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
                    Alterar
                </ButtonText>
            </Button>
        </Container>
        <Footer />
    </>
   ) 
}