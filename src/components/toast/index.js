import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const datas = [
  {
    route: "BasicToast",
    text: "Basic Toast"
  },
  {
    route: "ToastDuration",
    text: "Toast with duration"
  },
  {
    route: "ToastPosition",
    text: "Toast position"
  },
  {
    route: "ToastType",
    text: "Toast type"
  },
  {
    route: "ToastText",
    text: "Toast text style"
  },
  {
    route: "ToastButton",
    text: "Toast button style"
  }
];

class NHToast extends Component {

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
            <Title>Toast</Title>
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

export default connect(mapStateToProps, bindAction)(NHToast);
