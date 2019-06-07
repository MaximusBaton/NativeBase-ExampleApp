import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  SwipeRow,
  Text,
  Left,
  Right,
  Body,
  View
} from "native-base";
import styles from "./styles";

class SwipeRowCustomStyle extends Component {

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
          <Body style={{ flex: 3 }}>
            <Title>Swipe Row Custom Style</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false}>
          <SwipeRow
            style={{ backgroundColor: "#9370DB" }}
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert("Add")}>
                <Icon active name="add" style={{ color: "#FFF" }} />
              </Button>
            }
            right={
              <Button danger onPress={() => alert("Trash")}>
                <Icon active name="trash" />
              </Button>
            }
            body={
              <View style={{ paddingLeft: 20 }}>
                <Text style={{ color: "#FFF" }}>
                  Swipe me to left and right
                </Text>
              </View>
            }
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

export default connect(mapStateToProps, bindAction)(SwipeRowCustomStyle);
