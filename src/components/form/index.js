import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const datas = [
  {
    route: "fixedLabel",
    text: "Fixed Label"
  },
  {
    route: "inlineLabel",
    text: "Inline Label"
  },
  {
    route: "floatingLabel",
    text: "Floating Label"
  },
  {
    route: "placeholderLabel",
    text: "Placeholder Label"
  },
  {
    route: "stackedLabel",
    text: "Stacked Label"
  },
  {
    route: "regularInput",
    text: "Regular Textbox"
  },
  {
    route: "underlineInput",
    text: "Underlined Textbox"
  },
  {
    route: "roundedInput",
    text: "Rounded Textbox"
  },
  {
    route: "iconInput",
    text: "Icon Textbox"
  },
  {
    route: "pickerInput",
    text: "Textbox with Picker"
  },
  {
    route: "successInput",
    text: "Success Input Textbox"
  },
  {
    route: "errorInput",
    text: "Error Input Textbox"
  },
  {
    route: "disabledInput",
    text: "Disabled Textbox"
  },
  {
    route: "textArea",
    text: "TextArea"
  }
];

class NHForm extends Component {

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
            <Title>Form</Title>
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

export default connect(mapStateToProps, bindAction)(NHForm);
