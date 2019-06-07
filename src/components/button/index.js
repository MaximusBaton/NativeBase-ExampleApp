import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const datas = [
  {
    route: 'defaultbtn',
    text: 'Default Button',
  },
  {
    route: 'outline',
    text: 'Outline Button',
  },
  {
    route: 'rounded',
    text: 'Rounded Button',
  },
  {
    route: 'block',
    text: 'Block Button',
  },
  {
    route: 'full',
    text: 'Full Button',
  },
  {
    route: 'custom',
    text: 'Custom Size Button',
  },
  {
    route: 'transparent',
    text: 'Transparent Button',
  },
  {
    route: 'iconBtn',
    text: 'Icon Button',
  },
  {
    route: 'disabled',
    text: 'Disabled Button',
  },
];
class NHButton extends Component {  // eslint-disable-line

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openLeftMenu}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Buttons</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <FlatList
              data={datas}
              renderItem={({ item }) => {
                return (
                  <ListItem button onPress={() => { Actions[item.route]({ openLeftMenu : this.props.openLeftMenu });/* this.props.closeLeftMenu();*/ }} >
                    <Text>{item.text}</Text>
                    <Right>
                      <Icon name="arrow-forward" style={{ color: '#999' }} />
                    </Right>
                  </ListItem>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
          />
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

export default connect(mapStateToProps, bindAction)(NHButton);
