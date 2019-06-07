import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Badge } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class NHBadge extends Component { //eslint-disable-line

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
            <Title>Badge</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Badge style={styles.mb}><Text>2</Text></Badge>
          <Badge primary style={styles.mb}><Text>2</Text></Badge>
          <Badge success style={styles.mb}><Text>2</Text></Badge>
          <Badge info style={styles.mb}><Text>2</Text></Badge>
          <Badge warning style={styles.mb}><Text>2</Text></Badge>
          <Badge danger style={styles.mb}><Text>2</Text></Badge>
          <Badge
            primary
            style={styles.mb}
          >
            <Icon name="star" style={{ fontSize: 15, color: '#fff' }} />
          </Badge>
          <Badge
            style={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white' }}
          >
            <Text>1866</Text>
          </Badge>
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

export default connect(mapStateToProps, bindAction)(NHBadge);
