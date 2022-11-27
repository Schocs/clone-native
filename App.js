import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha';
import { NovaSenha } from './src/screens/NovaSenha';
import { CompraEfetuada } from './src/screens/CompraEfetuada';
import { UsuarioCadastrado } from './src/screens/UsuarioCadastrado';
import { SenhaAlterada } from './src/screens/SenhaAlterada';
import { AlterarCategoria } from './src/screens/AlterarCategoria';
import { AlterarProduto } from './src/screens/AlterarProduto';
import { CadastraCategoria } from './src/screens/CadastrarCategoria';
import { CadastraProduto } from './src/screens/CadastrarProduto';
import { Cadastro } from './src/screens/Cadastro'

export default function App() {
  return (
    <Cadastro />
  //<CadastraProduto />
    //<CadastraCategoria />
  //  <AlterarProduto />
  //<AlterarCategoria />
  //<SenhaAlterada />
  //<UsuarioCadastrado />
  //<CompraEfetuada />
  //<NovaSenha />
  //<RecuperarSenha />
  //<Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
