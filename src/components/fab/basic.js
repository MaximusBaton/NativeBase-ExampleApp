import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Fab, Button, IconNB, Left, Right, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class BasicFab extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <Container style={styles.container}>

        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Title>Single FAB</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1 }}>

          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}
          >
            <IconNB name="md-share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <IconNB name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <IconNB name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <IconNB name="ios-mail" />
            </Button>
          </Fab>

        </View>


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

export default connect(mapStateToProps, bindAction)(BasicFab);
