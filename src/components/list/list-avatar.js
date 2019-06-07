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
  Right,
  Body
} from "native-base";
import styles from "./styles";

const pratik = require("../../_assets/contacts/pratik.png");
const sanket = require("../../_assets/contacts/sanket.png");
const megha = require("../../_assets/contacts/megha.png");
const atul = require("../../_assets/contacts/atul.png");
const saurabh = require("../../_assets/contacts/saurabh.png");
const varun = require("../../_assets/contacts/varun.png");
const datas = [
  {
    img: pratik,
    text: "Kumar Pratik",
    note: "Its time to build a difference . .",
    time: "3:43 pm"
  },
  {
    img: sanket,
    text: "Kumar Sanket",
    note: "One needs courage to be happy and smiling all time . . ",
    time: "1:12 pm"
  },
  {
    img: megha,
    text: "Megha",
    note: "Live a life style that matchs your vision",
    time: "10:03 am"
  },
  {
    img: atul,
    text: "Atul Ranjan",
    note: "Failure is temporary, giving up makes it permanent",
    time: "5:47 am"
  },
  {
    img: saurabh,
    text: "Saurabh Sahu",
    note: "The biggest risk is a missed opportunity !!",
    time: "11:11 pm"
  },
  {
    img: varun,
    text: "Varun Sahu",
    note: "Wish I had a Time machine . .",
    time: "8:54 pm"
  }
];

class NHListAvatar extends Component {

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
            <Title>List Avatar</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <FlatList
            data={datas}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => {
              return (
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={item.img} />
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
                  <Text note>
                    {item.time}
                  </Text>
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

export default connect(mapStateToProps, bindAction)(NHListAvatar);
