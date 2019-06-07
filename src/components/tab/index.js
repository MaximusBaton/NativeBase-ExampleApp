import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const datas = [
  {
    route: "BasicTab",
    text: "Basic Tabs"
  },
  {
    route: "ConfigTab",
    text: "Advanced Tabs"
  },
  {
    route: "ScrollableTab",
    text: "Scrollable Tabs"
  }
];

class NHTab extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true
    });
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
            <Title>Tabs</Title>
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

export default connect(mapStateToProps, bindAction)(NHTab);
