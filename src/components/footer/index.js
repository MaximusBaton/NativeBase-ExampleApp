import React, { Component } from 'react';
import { FlatList } from "react-native";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text, Left, Body, Right/*, List*/, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const datas = [
  {
    route: 'basicFooter',
    text: 'Basic Footer',
  },
  {
    route: 'iconFooter',
    text: 'Icon Footer',
  },
  {
    route: 'iconTextFooter',
    text: 'Icon & Text Footer',
  },
  {
    route: 'badgeFooter',
    text: 'With Badge',
  },
];

class NHFooter extends Component {

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
            <Title>Footer</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <FlatList
              data={datas}
              renderItem={({ item }) => {
                return (
                  <ListItem button onPress={() => { Actions[item.route]({ openLeftMenu : this.props.openLeftMenu }); }} >
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

export default connect(mapStateToProps, bindAction)(NHFooter);
