import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  SwipeRow
} from "native-base";
import styles from "./styles";

class MultiListSwipe extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  constructor(props) {
    super(props);
    this._rows = {};
    this.state = { data: [{ key: 1, value: 'one' }, { key: 2, value: 'two' }, { key: 3, value: 'three' }, { key: 4, value: 'four' }, { key: 5, value: 'five' }] };
  }
  removeItem(key) {
    let data = this.state.data;
    this._rows[key]._root.closeRow();
    data = data.filter((item) => item.key !== key)
    this.setState({ data })
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
          <Body style={{ flex: 3 }}>
            <Title>Multiple List Swipe</Title>
          </Body>
          <Right />
        </Header>

        <Content>

          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <SwipeRow
              ref={row => (this._rows[item.key] = row)}
              leftOpenValue={75}
              rightOpenValue={-75}
              left={
                <Button success onPress={() => alert(item.value)} >
                  <Icon active name="add" />
                </Button>
              }
              body={
                <View>
                  <Text style={{ paddingLeft: 15 }}>{item.value}</Text>
                </View>
              }
              right={
                <Button full danger onPress={(a,s,d,f) => this.removeItem(item.key)}>
                  <Icon active name="trash" />
                </Button>
              }
            />}
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

export default connect(mapStateToProps, bindAction)(MultiListSwipe);
