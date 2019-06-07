import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Thumbnail, Left, Right, Body, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const deviceWidth = Dimensions.get('window').width;
const logo = require('../../_assets/logo.png');
const cardImage = require('../../_assets/drawer-cover.png');

class NHCardShowcase extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Card Showcase</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={cardImage} />
                <Text>
                NativeBase is a free and, source framework that enables developers
                to build high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>

              </Body>
            </CardItem>
            <CardItem style={{paddingVertical: 0}}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
    return {
        // ...
    };
}

const mapStateToProps = state => ({
    // ...
});

export default connect(mapStateToProps, bindAction)(NHCardShowcase);
