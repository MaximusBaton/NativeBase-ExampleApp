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
  ListItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class NHListDivider extends Component {

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
          <Body>
            <Title>List Divider</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
          <ListItem>
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Ali Connors</Text>
          </ListItem>
          <ListItem>
            <Text>Allen Lee</Text>
          </ListItem>
          <ListItem>
            <Text>Andy Hertzfeld</Text>
          </ListItem>
          <ListItem last>
            <Text>Angana Ghosh</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>B</Text>
          </ListItem>
          <ListItem>
            <Text>Bradley Horowitz</Text>
          </ListItem>
          <ListItem>
            <Text>Brian Swetland</Text>
          </ListItem>
          <ListItem last>
            <Text>Brittany Kelso</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>C</Text>
          </ListItem>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem>
            <Text>Cendre Urbino</Text>
          </ListItem>
          <ListItem last>
            <Text>Claire Barclay</Text>
          </ListItem>
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

export default connect(mapStateToProps, bindAction)(NHListDivider);
