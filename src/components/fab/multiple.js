import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Fab, Button, IconNB, Left, Right, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class MultipleFab extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      active1: false,
      active2: false,
      active3: false,
    };
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
            <Title>Multiple FABs</Title>
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
          <Fab
            active={this.state.active1}
            direction="left"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="topRight"
            onPress={() => this.setState({ active1: !this.state.active1 })}
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
          <Fab
            active={this.state.active2}
            direction="down"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="topLeft"
            onPress={() => this.setState({ active2: !this.state.active2 })}
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
          <Fab
            active={this.state.active3}
            direction="right"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomLeft"
            onPress={() => this.setState({ active3: !this.state.active3 })}
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

export default connect(mapStateToProps, bindAction)(MultipleFab);
