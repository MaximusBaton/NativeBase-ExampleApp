import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const datas = [
  {
    route: "nHBasicList",
    text: "Basic List"
  },
  {
    route: "nHListItemSelected",
    text: "ListItem Selected"
  },
  {
    route: "nHListDivider",
    text: "List Divider"
  },
  {
    route: "nHListHeader",
    text: "List Header"
  },
  {
    route: "nHListIcon",
    text: "List Icon"
  },
  {
    route: "nHListAvatar",
    text: "List Avatar"
  },
  {
    route: "nHListThumbnail",
    text: "List Thumbnail"
  },
  {
    route: "nHListSeparator",
    text: "List Separator"
  },
  {
    route: "nHListItemNoIndent",
    text: "List NoIndent"
  }
];

class NHList extends Component {

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
            <Title>List</Title>
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

export default connect(mapStateToProps, bindAction)(NHList);
