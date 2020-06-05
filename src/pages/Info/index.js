import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SocialIcon from 'react-native-vector-icons/AntDesign';
import WhatsIcon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, Linking} from 'react-native';
import Background from '~/components/Background';

import {Container, Text, Title, IconContainer} from './styles';

export default function Info() {
  return (
    <Background>
      <Title>Sereia Tattoo Studio</Title>
      <Container>
        <Text>
          Desde 2015 o Sereia Tattoo Studio atua no seguimento da arte das
          marcas corporais levando aos seus cliente o máximo de exclusividade
          nos projetos para quem gosta.Além de resultados com qualidade é o
          estúdio de tatuagem com a melhor vista de Salvador.
        </Text>
      </Container>
      <Title>Siga a gente nas redes sociais:</Title>
      <IconContainer>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.facebook.com/sereiatattoostudio');
          }}
          style={{
            size: 50,
            paddingLeft: 10,
            paddingRight: 20,
          }}>
          <SocialIcon name="facebook-square" size={70} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.instagram.com/sereia_tattoostudio/');
          }}
          style={{
            paddingLeft: 10,
            paddingRight: 20,
          }}>
          <SocialIcon name="instagram" size={70} color="black" />
        </TouchableOpacity>
      </IconContainer>
      <Title>Endereço e contato:</Title>
      <IconContainer>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://goo.gl/maps/1PoYvQMtWfAwznbz8');
          }}
          style={{
            paddingLeft: 10,
            paddingRight: 20,
          }}>
          <Icon name="location-on" size={50} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`tel:${71987274015}`);
          }}
          style={{
            paddingLeft: 10,
            paddingRight: 20,
          }}>
          <Icon name="call" size={50} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.canOpenURL('whatsapp://send?text=oi').then((supported) => {
              if (supported) {
                return Linking.openURL('whatsapp://send?phone=5571987274015');
              }
              return Linking.openURL(
                'https://api.whatsapp.com/send?phone=5571987274015',
              );
            })
          }
          style={{
            paddingLeft: 10,
            paddingRight: 20,
          }}>
          <WhatsIcon name="whatsapp" size={50} color="black" />
        </TouchableOpacity>
      </IconContainer>

      <Text
        style={{
          marginTop: 60,
          fontSize: 12,
        }}>
        Desenvolvido pela equipe Seu Serviço
      </Text>
    </Background>
  );
}

Info.navigationOptions = {
  // tabBarLabel: 'Informações',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({tintColor}) => <Icon name="info" size={30} color={tintColor} />,
};
