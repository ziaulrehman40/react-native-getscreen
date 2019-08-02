### REACT-GETSCREEN

This package provides a React Native higher order component which adds
some useful methods to your wrapped components in order to
get your screen width. And it also causes state change on screen type change if `shouldListenOnResize` is enabled(which is by default), which means a re-render of the screen when size changes.

While you should solve your responsiveness issues with css,
sometimes you just need to render different components depending
on the display type.

**This package is a port of react library (react-getscreen)[https://github.com/calinortan/react-getscreen] to react-native**

###### Install
```
npm install react-native-getscreen --save
```

###### Example

```
import React, { Component } from 'react';
import { View } from 'react-native';
import { withGetScreen } from 'react-getscreen'

class Test extends Component {
  render() {
    if (this.props.isMobile()) return <View>Mobile</View>;
    if (this.props.isTablet()) return <View>Tablet</View>;
    return <View>Desktop</View>;
  }
}

export default withGetScreen(Test);
```

Supports an `options` object containing following props:
- `mobileLimit` - Max width for mobile display. default = 468
- `tabletLimit` - Max width for tablet display. default = 768
- `shouldListenOnResize` - Boolean describing whether it should listen on screen resize. default = true

