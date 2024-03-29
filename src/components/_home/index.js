import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, ImageBackground, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button, H3, Text } from 'native-base';

import styles from './styles';

const launchscreenBg = require('../../_assets/launchscreen-bg.png');
const launchscreenLogo = require('../../_assets/logo-kitchen-sink.png');

class Home extends Component {

  static propTypes = {
    openLeftMenu: PropTypes.func,
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle='light-content'/>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <Image source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={{ alignItems: 'center', marginBottom: 50, backgroundColor: 'transparent' }}>
            <H3 style={styles.text}>App to showcase</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>NativeBase components</H3>
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: '#6FAF98', alignSelf: 'center' }}
              onPress={this.props.openLeftMenu}
            >
              <Text>Lets Go!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

function bindActions(dispatch) {
    return {
        // ...
    };
}

const mapStateToProps = state => ({
    // ...
});

export default connect(mapStateToProps, bindActions)(Home);
