import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const datas = [
  {
    route: "basicCard",
    text: "Basic Card"
  },
  {
    route: "nHCardHeaderAndFooter",
    text: "Card Header & Footer"
  },
  {
    route: "nHCardItemBordered",
    text: "Bordered CardItem"
  },
  {
    route: "nHCardTransparent",
    text: "Transparent Card"
  },
  {
    route: "nHCardItemButton",
    text: "Button CardItem"
  },
  {
    route: "nHCardList",
    text: "Card List"
  },
  {
    route: "nHCardImage",
    text: "Card Image"
  },
  {
    route: "nHCardShowcase",
    text: "Card Showcase"
  },
  {
    route: "nHCardCustomBorderRadius",
    text: "Card Custom BorderRadius"
  }
];
class NHCard extends Component {

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
            <Title>Card</Title>
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

export default connect(mapStateToProps, bindAction)(NHCard);
