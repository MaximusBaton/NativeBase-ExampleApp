import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class Header2 extends Component {  // eslint-disable-line

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
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.props.openLeftMenu}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>
            Header With Icon Buttons
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

export default connect(mapStateToProps, bindAction)(Header2);
