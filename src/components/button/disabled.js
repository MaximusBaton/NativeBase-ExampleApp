import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class Disabled extends Component {  // eslint-disable-line

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
            <Title>Disabled</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Button disabled style={styles.mb15}><Text>Solid</Text></Button>
            <Button bordered disabled style={styles.mb15}><Text>Bordered</Text></Button>
            <Button rounded disabled style={styles.mb15}><Text>rounded</Text></Button>
            <Button large disabled style={styles.mb15}><Text>Custom</Text></Button>
            <Button disabled iconRight style={styles.mb15}>
              <Text>Icon Button</Text>
              <Icon name="home" />
            </Button>
            <Button block disabled style={styles.mb15}><Text>Block</Text></Button>
          </View>
          <Button full disabled style={styles.mb15}><Text>Block</Text></Button>
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

export default connect(mapStateToProps, bindAction)(Disabled);
