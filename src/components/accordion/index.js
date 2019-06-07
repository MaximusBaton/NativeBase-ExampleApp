import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

const datas = [
  {
    route: "accordionDefault",
    text: "Default Accordion"
  },
  {
    route: "accordionIcon",
    text: "Icon and Expanded Icon"
  },
  {
    route: "accordionIconStyle",
    text: "Icon and Expanded Icon style"
  },
  {
    route: "accordionHeaderContentStyle",
    text: "Header and Content style"
  },
  {
    route: "accordionCustomHeaderContent",
    text: "Custom Header and Content"
  }
];

class Accordion extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openLeftMenu}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Accordion</Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ backgroundColor: "white" }}>
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

export default connect(mapStateToProps, bindAction)(Accordion);
