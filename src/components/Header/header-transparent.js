import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class HeaderTransparent extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  render() {
    return (
      <Container style={{ backgroundColor: "#87cefa" }}>
        <Header transparent>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Transparent Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Header with transparent prop</Text>
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

export default connect(mapStateToProps, bindAction)(HeaderTransparent);
