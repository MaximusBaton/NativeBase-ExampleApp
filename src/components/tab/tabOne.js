import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Content, Card, CardItem, Text, Body } from "native-base";

class TabOne extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>NativeBase is open source and free.</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Platform specific codebase for components</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Any native third-party libraries can be included along with
                NativeBase.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Single file to theme your app and NativeBase components.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Gives an ease to include different font types in your app.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
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

export default connect(mapStateToProps, bindAction)(TabOne);
