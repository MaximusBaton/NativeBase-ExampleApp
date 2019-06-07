import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, ListItem, Icon, Container, Left, Right, Badge, Button, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './style';

const drawerCover = require('../../_assets/drawer-cover.png');
const drawerImage = require('../../_assets/logo-kitchen-sink.png');

const datas = [
  {
    name: "Anatomy",
    route: "anatomy",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "Header",
    route: "header",
    icon: "arrow-up",
    bg: "#477EEA",
    types: "11"
  },
  {
    name: "Footer",
    route: "footer",
    icon: "arrow-down",
    bg: "#DA4437",
    types: "4"
  },
  {
    name: "Accordion",
    route: "accordion",
    icon: "repeat",
    bg: "#C5F442",
    types: "5"
  },
  {
    name: "Actionsheet",
    route: "actionsheet",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "Badge",
    route: "badge",
    icon: "notifications",
    bg: "#4DCAE0"
  },
  {
    name: "Card",
    route: "card",
    icon: "keypad",
    bg: "#B89EF5",
    types: "8"
  },
  {
    name: "Deck Swiper",
    route: "deckswiper",
    icon: "swap",
    bg: "#3591FA",
    types: "2"
  },
  {
    name: "Fab",
    route: "fab",
    icon: "help-buoy",
    bg: "#EF6092",
    types: "2"
  },
  {
    name: "Form & Inputs",
    route: "form",
    icon: "call",
    bg: "#EFB406",
    types: "12"
  },
  {
    name: "Picker",
    route: "NHPicker",
    icon: "arrow-dropdown",
    bg: "#F50C75"
  },
  {
    name: "Radio",
    route: "NHRadio",
    icon: "radio-button-on",
    bg: "#6FEA90"
  },
  {
    name: "Check Box",
    route: "checkbox",
    icon: "checkmark-circle",
    bg: "#EB6B23"
  },
  {
    name: "Date Picker",
    route: "nHDatePicker",
    icon: "calendar",
    bg: "#EB6B23"
  },
  {
    name: "Button",
    route: "button",
    icon: "radio-button-off",
    bg: "#1EBC7C",
    types: "9"
  },
  {
    name: "Icon",
    route: "nHIcon",
    icon: "information-circle",
    bg: "#bfe9ea",
    types: "4"
  },
  {
    name: "Layout",
    route: "nHLayout",
    icon: "grid",
    bg: "#9F897C",
    types: "5"
  },
  {
    name: "List",
    route: "nHList",
    icon: "lock",
    bg: "#5DCEE2",
    types: "8"
  },
  {
    name: "ListSwipe",
    route: "ListSwipe",
    icon: "code-working",
    bg: "#C5F442",
    types: "3"
  },
  {
    name: "SearchBar",
    route: "searchbar",
    icon: "search",
    bg: "#29783B"
  },
  {
    name: "Segment",
    route: "Segment",
    icon: "menu",
    bg: "#0A2C6B",
    types: "3"
  },
  {
    name: "Spinner",
    route: "NHSpinner",
    icon: "navigate",
    bg: "#BE6F50"
  },
  {
    name: "Tabs",
    route: "NHTab",
    icon: "home",
    bg: "#AB6AED",
    types: "3"
  },
  {
    name: "Thumbnail",
    route: "NHThumbnail",
    icon: "image",
    bg: "#cc0000",
    types: "2"
  },
  {
    name: "Toast",
    route: "NHToast",
    icon: "albums",
    bg: "#C5F442",
    types: "6"
  },
  {
    name: "Typography",
    route: "NHTypography",
    icon: "paper",
    bg: "#48525D"
  }
];

class LeftMenu extends Component {

    static propTypes = {
        openLeftMenu: PropTypes.func,
        closeLeftMenu: PropTypes.func,
    }

    render() {
        return (
          <Container>
            <Content
              bounces={false}
              style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
            >
              <Image source={drawerCover} style={styles.drawerCover} />
              <Image square style={styles.drawerImage} source={drawerImage} />
              <FlatList
                  data={datas}
                  renderItem={({ item }) => {
                    return (
                      <ListItem button noBorder onPress={() => { Actions[item.route]({ openLeftMenu : this.props.openLeftMenu }); this.props.closeLeftMenu(); }} >
                        <Left>
                          <Icon active name={item.icon} style={{ color: '#777', fontSize: 26, width: 30 }} />
                          <Text style={styles.text}>{item.name}</Text>
                        </Left>
                        {(item.types) &&
                        <Right style={{ flex: 1 }}>
                          <Badge
                            style={{ borderRadius: 3, height: 25, width: 72, backgroundColor: item.bg }}
                          >
                            <Text style={styles.badgeText}>{`${item.types} Types`}</Text>
                          </Badge>
                        </Right>
                        }
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

export default connect(mapStateToProps, bindAction)(LeftMenu);
