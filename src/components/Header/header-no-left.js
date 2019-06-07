import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from "./styles";

class HeaderNoLeft extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  render() {
    return (
      <Container style={styles.container}>
        <Header noLeft>
          <Left>
            <Button
              hasText
              transparent
              onPress={() => Actions.pop()}
            >
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button
              hasText
              transparent
              onPress={() => Actions.pop()}
            >
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>
            Header with noLeft prop, eliminates Left component for Android
          </Text>
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

export default connect(mapStateToProps, bindAction)(HeaderNoLeft);
