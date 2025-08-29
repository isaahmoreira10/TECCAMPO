import React, {useState} from 'react';
import {SafeAreaView, View, Text,TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
export default function App (){
  cont [pagina, setPagina] = useState ('home');
  return(
    <SafeAreaView style= {atyles.container}>
      <Header pagina={pagina} setpaginna= {setpagina}/>
      <ScrollView contentContainerStyle={StyleSheet.content}>
        {pagina === 'home' && <home />}
        {pagina === 'sobre' && <sobre />}
        {pagina === 'servicos' && <servicos />}
        {pagina === 'contato' && <contato />}
      </ScrollView>
      <footer />
    </SafeAreaView>
  );
}
 
Function Header ({ pagina, setPagina}){
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>GAME TECH</Text>
      <View style={styles.nav}>
        {['home', 'sobre', 'serviços', 'contato'].map((p) =>(
        <TouchableOpacity
        key={p}
        style={[styles.navButton, pagina === p && styles.navButtonActive]}
        onPress={() => setPagina(p)}
        >
          <Text style={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
        </TouchableOpacity>
        ))}
       </View>
      </View>
}

function Home () {
  return (
    <view style={styles.section}>
      <text style={styles.title}>Bem-vindo a nossa empresa</text>
      <Text>SOMOS LIDERES DE EM SOLUÇOES TECNOLOGICOS PARA..</Text>
    </view>
  );
}

function sobre(){
  return (
    <view style={styles.section}>
      <text style={StyleSheet.title}>sobre nos</text>
      <text>fundada em 2010, temos o compromisso de qualidade e inovação....</text>
    </view>
  );
}

function servicos (){
  return(
    <view styles={styles.section}>
      <text style={styles.title}>nossos servicos</text>
      <text>-consultoria em TI</text>
      <Text>-desenvolvimento ...</Text>
      <text>-suporte tecnico</text>
    </view>
  )
}

function Contato(){
  const [nome, setNome]= React.useState('');
  const [email, setEmail]= React.useState('');
  const [mensagens, setmensagem]= React.useState('');

  function enviar (){
    if (!nome|| !email || !mensagem){
      alert.alert('erro','por favor preencha todos os campos');
      return;
    }
    alert.alert('mensagem enviada', obrigado, ${nome}! Retornaremos em breve.)
    setNome('');
    setEmail('');
    setmensagem('');
  }
  return(
    <view style={styles.section}>
      <text styles={styles.title}>contato</text>
      TextInput
      style={styles.input}
      placeholder="nome"
      value={nome}
      onChangeText={setNome}
      
      <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      />
      <TextInput
      style={[styles.input,{height: 100}]}
      placeholder="mensagem"
      value={mensagem}
      onChangetext={setMensagem}
      multiline
      />
      <TouchableOpacity style={styles.button} onPress={enviar}>
        <text style={styles.buttontext}>Enviar</text>
      </TouchableOpacity>
    </view>
  );
}

function Footer(){
  return(
    <view style ={styles.footer}>
      <text style={{ color: 'white'}}>2025 minha empresa. todos os direitos reservados.</text>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4f7fa'
  },
  header:{
    backgroundColor: '#004080',
    padding: 40,
    alignContent: 'center',
    alignitens: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:12
  },
  nav: {
    flexDirection: 'row', justifyContent:'space-around'
  },
  navButton: { paddingVertical:8, paddingHorizontal: 12, borderRadius:4},
  navButtonActive: {backgroundColor: '#0066C'},
  navButtonText: { color: 'white', fontWeight: 'bold'},
  content: {padding:20, flexGrow:1 },
  section: { marginBottom: 20},
  title: {fontSize: 20, fintWeight: 'bold', marginBottom:10},
  
  input: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,
  };

  button: {
    backgroundColor : '#004080'
    paddingVertical:12,
    borderRadius:6,
    alignitens: 'center',
  },
  buttontext: {color: 'white', fontWeight: 'bold', fontSize: 16},
  footer: { backgroundColor: '#00264d', padding: 15, alignitens: 'center'},
});
  
















