import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const datas = [
  {
    route: 'header1',
    text: 'Only Title',
  },
  {
    route: 'header2',
    text: 'Icon Buttons',
  },
  {
    route: 'header3',
    text: 'Text Buttons',
  },
  {
    route: 'header4',
    text: 'Icon Button and Text Button',
  },
  {
    route: 'header5',
    text: 'Icon and Text Buttons',
  },
  {
    route: 'header6',
    text: 'Multiple Icon Buttons',
  },
  {
    route: 'header7',
    text: 'Title and Subtitle',
  },
  {
    route: 'header8',
    text: 'Custom backgroundColor',
  },
  {
    route: "header-span",
    text: "Header Span"
  },
  {
    route: "header-no-shadow",
    text: "Header without shadow"
  },
  {
    route: "header-no-left",
    text: "Header noLeft"
  },
  {
    route: "header-transparent",
    text: "Header Transparent"
  }
];


class HeaderNB extends Component {  // eslint-disable-line

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
            <Title>Headers</Title>
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

export default connect(mapStateToProps, bindAction)(HeaderNB);