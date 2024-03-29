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
  Body,
  Left,
  Right,
  Grid,
  Col,
  Row,
  Text
} from "native-base";
import styles from "./styles";

class PlatformSpecificIcon extends Component {

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
            <Title>Platform</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Grid>
            <Row>
              <Col style={styles.col}>
                <Icon ios="ios-person" android="md-person" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-apps" android="md-apps" />
                <Text>apps</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-alarm" android="md-alarm" />
                <Text>alarm</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-paper" android="md-paper" />
                <Text>paper</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-cart" android="md-cart" />
                <Text>cart</Text>
              </Col>
            </Row>
          </Grid>
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

export default connect(mapStateToProps, bindAction)(PlatformSpecificIcon);
