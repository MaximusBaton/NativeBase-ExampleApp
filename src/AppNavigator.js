import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { /*StatusBar, */Platform } from 'react-native';
import { connect } from 'react-redux';
import { StyleProvider, Drawer } from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';

import getTheme from './theme/components';
import theme from './theme/variables/platform';

import Home from './components/_home/';
import LeftMenu from './components/_leftMenu';


import Anatomy from './components/anatomy/';

import Header from './components/Header/';
import Header1 from './components/Header/1';
import Header2 from './components/Header/2';
import Header3 from './components/Header/3';
import Header4 from './components/Header/4';
import Header5 from './components/Header/5';
import Header6 from './components/Header/6';
import Header7 from './components/Header/7';
import Header8 from './components/Header/8';
import HeaderSpan from "./components/Header/header-span";
import HeaderNoShadow from "./components/Header/header-no-shadow";
import HeaderNoLeft from "./components/Header/header-no-left";
import HeaderTransparent from "./components/Header/header-transparent";

import Footer from './components/footer/';
import BasicFooter from './components/footer/basicFooter';
import IconFooter from './components/footer/iconFooter';
import IconTextFooter from './components/footer/iconText';
import BadgeFooter from './components/footer/badgeFooter';

import Accordion from "./components/accordion/";
import AccordionDefault from "./components/accordion/accordion-default";
import AccordionIcon from "./components/accordion/accordion-icon";
import AccordionIconStyle from "./components/accordion/accordion-icon-style";
import AccordionHeaderContentStyle from "./components/accordion/accordion-header-content-style";
import AccordionCustomHeaderContent from "./components/accordion/accordion-custom-header-content";

import Actionsheet from "./components/actionsheet";
import RegularActionSheet from "./components/actionsheet/regular";
import IconActionSheet from "./components/actionsheet/icon";

import NHBadge from './components/badge/';

import NHButton from './components/button/';
import DefaultBtn from './components/button/defaultbtn';
import Outline from './components/button/outline';
import Rounded from './components/button/rounded';
import Block from './components/button/block';
import Full from './components/button/full';
import Custom from './components/button/custom';
import Transparent from './components/button/transparent';
import IconBtn from './components/button/iconBtn';
import Disabled from './components/button/disabled';

import NHCard from './components/card/';
import BasicCard from './components/card/basic';
import NHCardItemBordered from "./components/card/carditem-bordered";
import NHCardItemButton from "./components/card/carditem-button";
import NHCardImage from './components/card/card-image';
import NHCardShowcase from './components/card/card-showcase';
import NHCardList from './components/card/card-list';
import NHCardHeaderAndFooter from './components/card/card-header-and-footer';
import NHCardTransparent from "./components/card/card-transparent";
import NHCardCustomBorderRadius from "./components/card/card-custom-border-radius";

import NHCheckbox from './components/checkbox/';

import NHDatePicker from "./components/datepicker/";

import NHDeckSwiper from './components/deckswiper/';
import SimpleDeck from "./components/deckswiper/simple";
import AdvancedDeck from "./components/deckswiper/advanced";

import NHFab from './components/fab/';
import BasicFab from './components/fab/basic';
import MultipleFab from './components/fab/multiple';

import NHForm from "./components/form/";
import TextArea from "./components/form/textArea";
import FixedLabel from "./components/form/fixedLabel";
import InlineLabel from "./components/form/inlineLabel";
import FloatingLabel from "./components/form/floatingLabel";
import PlaceholderLabel from "./components/form/placeholder";
import StackedLabel from "./components/form/stacked";
import RegularInput from "./components/form/regular";
import UnderlineInput from "./components/form/underline";
import RoundedInput from "./components/form/rounded";
import IconInput from "./components/form/iconInput";
import SuccessInput from "./components/form/success";
import ErrorInput from "./components/form/error";
import DisabledInput from "./components/form/disabledInput";
import PickerInput from "./components/form/pickerInput";

import NHIcon from "./components/icon/";
import Icons from "./components/icon/icon";
import BasicIcon from "./components/icon/basic";
import StateIcon from "./components/icon/state";
import PlatformSpecificIcon from "./components/icon/platform-specific";
import IconFamily from "./components/icon/icon-family";

import NHLayout from "./components/layout/";
import RowNB from "./components/layout/row";
import ColumnNB from "./components/layout/column";
import NestedGrid from "./components/layout/nested";
import CustomRow from "./components/layout/customRow";
import CustomCol from "./components/layout/customCol";

import NHList from "./components/list/";
import NHBasicList from "./components/list/basic-list";
import NHListItemSelected from "./components/list/listitem-selected";
import NHListDivider from "./components/list/list-divider";
import NHListSeparator from "./components/list/list-separator";
import NHListHeader from "./components/list/list-headers";
import NHListIcon from "./components/list/list-icon";
import NHListAvatar from "./components/list/list-avatar";
import NHListThumbnail from "./components/list/list-thumbnail";
import NHListItemNoIndent from "./components/list/listitem-noIndent";

import ListSwipe from "./components/listSwipe/";
import BasicListSwipe from "./components/listSwipe/basic-list-swipe";
import SwipeRowCustomStyle from "./components/listSwipe/swipe-row-style";
import MultiListSwipe from "./components/listSwipe/multi-list-swipe";

import NHPicker from "./components/picker/";
import RegularPicker from "./components/picker/regularPicker";
import PickerWithIcon from "./components/picker/picker-with-icon";
import PlaceholderPicker from "./components/picker/placeholderPicker";
import PlaceholderPickerNote from "./components/picker/placeholderPickernote";
import BackButtonPicker from "./components/picker/backButtonPicker";
import PickerTextItemText from "./components/picker/picker-text-itemtext";
import HeaderPicker from "./components/picker/headerPicker";
import HeaderStylePicker from "./components/picker/headerStylePicker";
import CustomHeaderPicker from "./components/picker/customHeaderPicker";
import PickerWithIconStyle from "./components/picker/picker-with-iconstyle";

import NHRadio from "./components/radio/";
import NHCustomRadio from "./components/radio/custom";
import NHDefaultRadio from "./components/radio/default";

import NHSearchbar from './components/searchbar/';

import Segment from "./components/segment";
import AdvSegment from "./components/segment/segmentTab";
import BasicSegment from "./components/segment/SegmentHeader";
import SegmentHeaderIcon from "./components/segment/SegmentHeaderIcon";

import NHSpinner from './components/spinner/';

import NHTab from "./components/tab/";
import BasicTab from "./components/tab/basicTab";
import ConfigTab from "./components/tab/configTab";
import ScrollableTab from "./components/tab/scrollableTab";

import NHThumbnail from './components/thumbnail/';

import NHToast from "./components/toast/";
import BasicToast from "./components/toast/basic-toast";
import ToastDuration from "./components/toast/toast-duration";
import ToastPosition from "./components/toast/toast-position";
import ToastType from "./components/toast/toast-type";
import ToastText from "./components/toast/toast-text";
import ToastButton from "./components/toast/toast-button";

import NHTypography from './components/typography/';


const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

    closeLeftMenu() {
        this._drawer._root.close();
    }
    openLeftMenu(){
        this._drawer._root.open();
    }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          content={<LeftMenu openLeftMenu={this.openLeftMenu.bind(this)} closeLeftMenu={this.closeLeftMenu.bind(this)} />}
        >
          {/*<StatusBar
            hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
            backgroundColor={theme.statusBarColor}
          />*/}
          <RouterWithRedux>
            <Scene key="root">

              <Scene key="home" openLeftMenu={this.openLeftMenu.bind(this)} component={Home} hideNavBar initial={true} />

              <Scene key="anatomy" component={Anatomy} />

              <Scene key="header" component={Header} />
              <Scene key="header1" component={Header1} />
              <Scene key="header2" component={Header2} />
              <Scene key="header3" component={Header3} />
              <Scene key="header4" component={Header4} />
              <Scene key="header5" component={Header5} />
              <Scene key="header6" component={Header6} />
              <Scene key="header7" component={Header7} />
              <Scene key="header8" component={Header8} />
              <Scene key="header-span" component={HeaderSpan} />
              <Scene key="header-no-shadow" component={HeaderNoShadow} />
              <Scene key="header-no-left" component={HeaderNoLeft} />
              <Scene key="header-transparent" component={HeaderTransparent} />

              <Scene key="footer" component={Footer} />
              <Scene key="basicFooter" component={BasicFooter} />
              <Scene key="iconFooter" component={IconFooter} />
              <Scene key="iconTextFooter" component={IconTextFooter} />
              <Scene key="badgeFooter" component={BadgeFooter} />

              <Scene key="accordion" component={Accordion} />
              <Scene key="accordionDefault" component={AccordionDefault} />
              <Scene key="accordionIcon" component={AccordionIcon} />
              <Scene key="accordionIconStyle" component={AccordionIconStyle} />
              <Scene key="accordionHeaderContentStyle" component={AccordionHeaderContentStyle} />
              <Scene key="accordionCustomHeaderContent" component={AccordionCustomHeaderContent} />

              <Scene key="actionsheet" component={Actionsheet} />
              <Scene key="regularActionSheet" component={RegularActionSheet} />
              <Scene key="iconActionSheet" component={IconActionSheet} />

              <Scene key="badge" component={NHBadge} />

              <Scene key="button" component={NHButton} />
              <Scene key="defaultbtn" component={DefaultBtn} />
              <Scene key="outline" component={Outline} />
              <Scene key="rounded" component={Rounded} />
              <Scene key="block" component={Block} />
              <Scene key="full" component={Full} />
              <Scene key="custom" component={Custom} />
              <Scene key="transparent" component={Transparent} />
              <Scene key="iconBtn" component={IconBtn} />
              <Scene key="disabled" component={Disabled} />

              <Scene key="card" component={NHCard} />
              <Scene key="basicCard" component={BasicCard} />
              <Scene key="nHCardItemBordered" component={NHCardItemBordered} />
              <Scene key="nHCardItemButton" component={NHCardItemButton} />
              <Scene key="nHCardImage" component={NHCardImage} />
              <Scene key="nHCardShowcase" component={NHCardShowcase} />
              <Scene key="nHCardList" component={NHCardList} />
              <Scene key="nHCardHeaderAndFooter" component={NHCardHeaderAndFooter} />
              <Scene key="nHCardTransparent" component={NHCardTransparent} />
              <Scene key="nHCardCustomBorderRadius" component={NHCardCustomBorderRadius} />

              <Scene key="checkbox" component={NHCheckbox} />

              <Scene key="nHDatePicker" component={NHDatePicker} />

              <Scene key="deckswiper" component={NHDeckSwiper} />
              <Scene key="simpleDeck" component={SimpleDeck} />
              <Scene key="advancedDeck" component={AdvancedDeck} />

              <Scene key="fab" component={NHFab} />
              <Scene key="basicFab" component={BasicFab} />
              <Scene key="multipleFab" component={MultipleFab} />

              <Scene key="form" component={NHForm} />
              <Scene key="textArea" component={TextArea} />
              <Scene key="fixedLabel" component={FixedLabel} />
              <Scene key="inlineLabel" component={InlineLabel} />
              <Scene key="floatingLabel" component={FloatingLabel} />
              <Scene key="placeholderLabel" component={PlaceholderLabel} />
              <Scene key="stackedLabel" component={StackedLabel} />
              <Scene key="regularInput" component={RegularInput} />
              <Scene key="underlineInput" component={UnderlineInput} />
              <Scene key="roundedInput" component={RoundedInput} />
              <Scene key="iconInput" component={IconInput} />
              <Scene key="successInput" component={SuccessInput} />
              <Scene key="errorInput" component={ErrorInput} />
              <Scene key="disabledInput" component={DisabledInput} />
              <Scene key="pickerInput" component={PickerInput} />

              <Scene key="nHIcon" component={NHIcon} />
              <Scene key="icons" component={Icons} />
              <Scene key="basicIcon" component={BasicIcon} />
              <Scene key="stateIcon" component={StateIcon} />
              <Scene key="platformSpecificIcon" component={PlatformSpecificIcon} />
              <Scene key="iconFamily" component={IconFamily} />

              <Scene key="nHLayout" component={NHLayout} />
              <Scene key="rowNB" component={RowNB} />
              <Scene key="columnNB" component={ColumnNB} />
              <Scene key="nestedGrid" component={NestedGrid} />
              <Scene key="customRow" component={CustomRow} />
              <Scene key="customCol" component={CustomCol} />

              <Scene key="nHList" component={NHList} />
              <Scene key="nHBasicList" component={NHBasicList} />
              <Scene key="nHListItemSelected" component={NHListItemSelected} />
              <Scene key="nHListDivider" component={NHListDivider} />
              <Scene key="nHListSeparator" component={NHListSeparator} />
              <Scene key="nHListHeader" component={NHListHeader} />
              <Scene key="nHListIcon" component={NHListIcon} />
              <Scene key="nHListAvatar" component={NHListAvatar} />
              <Scene key="nHListThumbnail" component={NHListThumbnail} />
              <Scene key="nHListItemNoIndent" component={NHListItemNoIndent} />

              <Scene key="ListSwipe" component={ListSwipe} />
              <Scene key="BasicListSwipe" component={BasicListSwipe} />
              <Scene key="SwipeRowCustomStyle" component={SwipeRowCustomStyle} />
              <Scene key="MultiListSwipe" component={MultiListSwipe} />

              <Scene key="NHPicker" component={NHPicker} />
              <Scene key="RegularPicker" component={RegularPicker} />
              <Scene key="PickerWithIcon" component={PickerWithIcon} />
              <Scene key="PlaceholderPicker" component={PlaceholderPicker} />
              <Scene key="PlaceholderPickerNote" component={PlaceholderPickerNote} />
              <Scene key="BackButtonPicker" component={BackButtonPicker} />
              <Scene key="PickerTextItemText" component={PickerTextItemText} />
              <Scene key="HeaderPicker" component={HeaderPicker} />
              <Scene key="HeaderStylePicker" component={HeaderStylePicker} />
              <Scene key="CustomHeaderPicker" component={CustomHeaderPicker} />
              <Scene key="PickerWithIconStyle" component={PickerWithIconStyle} />

              <Scene key="NHRadio" component={NHRadio} />
              <Scene key="NHCustomRadio" component={NHCustomRadio} />
              <Scene key="NHDefaultRadio" component={NHDefaultRadio} />

              <Scene key="searchbar" component={NHSearchbar} />

              <Scene key="Segment" component={Segment} />
              <Scene key="AdvSegment" component={AdvSegment} />
              <Scene key="BasicSegment" component={BasicSegment} />
              <Scene key="SegmentHeaderIcon" component={SegmentHeaderIcon} />

              <Scene key="NHSpinner" component={NHSpinner} />

              <Scene key="NHTab" component={NHTab} />
              <Scene key="BasicTab" component={BasicTab} />
              <Scene key="ConfigTab" component={ConfigTab} />
              <Scene key="ScrollableTab" component={ScrollableTab} />

              <Scene key="NHThumbnail" component={NHThumbnail} />

              <Scene key="NHToast" component={NHToast} />
              <Scene key="BasicToast" component={BasicToast} />
              <Scene key="ToastDuration" component={ToastDuration} />
              <Scene key="ToastPosition" component={ToastPosition} />
              <Scene key="ToastType" component={ToastType} />
              <Scene key="ToastText" component={ToastText} />
              <Scene key="ToastButton" component={ToastButton} />

              <Scene key="NHTypography" component={NHTypography} />

            </Scene>
          </RouterWithRedux>
        </Drawer>
      </StyleProvider>
    );
  }
}

const bindAction = dispatch => ({
    // popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
    // navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
