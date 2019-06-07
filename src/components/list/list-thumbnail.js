import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";

const sankhadeep = require("../../_assets/contacts/sankhadeep.png");
const supriya = require("../../_assets/contacts/supriya.png");
const himanshu = require("../../_assets/contacts/himanshu.png");
const shweta = require("../../_assets/contacts/shweta.png");
const shruti = require("../../_assets/contacts/shruti.png");
const shivraj = require("../../_assets/contacts/shivraj.png");
const datas = [
  {
    img: sankhadeep,
    text: "Sankhadeep",
    note: "Its time to build a difference . ."
  },
  {
    img: supriya,
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: shivraj,
    text: "Shivraj",
    note: "Time changes everything . ."
  },
  {
    img: shruti,
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    img: himanshu,
    text: "Himanshu",
    note: "Live a life style that matchs your vision"
  },
  {
    img: shweta,
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent"
  }
];

class NHListThumbnail extends Component {

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
            <Title>List Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <FlatList
            data={datas}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => {
              return (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={item.img} />
                </Left>
                <Body>
                  <Text>
                    {item.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {item.note}
                  </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
              );
            }}
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

export default connect(mapStateToProps, bindAction)(NHListThumbnail);
