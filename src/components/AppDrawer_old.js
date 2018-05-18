import React, { Component } from 'react';
import { Image } from 'react-native';
import { Drawer } from 'native-base';
import SideBar from './AppSidebar';
export default class AppDrawer extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
      </Drawer>
    );
  }
}
