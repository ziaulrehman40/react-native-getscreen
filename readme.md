## REACT-NATIVE-GETSCREEN

This package provides a React Native higher order component(HOC) which adds
some useful methods to your wrapped components in order to
get your screen width. And it also causes state change on screen type change if `shouldListenOnResize` is enabled(which is by default), which means a re-render of the screen when size changes.

While you should solve your responsiveness issues with css,
but thing is, in RN there are no media queries, so what we can do is to apply conditional styles with help of this library.

This is particularly helpful when you are working with (react-native-web)[https://github.com/necolas/react-native-web] for building universal react/react-native apps which compiles to native apps as well as web apps.

**This package is a port of react library (react-getscreen)[https://github.com/calinortan/react-getscreen] to react-native**

#### Install
```
npm install react-native-getscreen --save
```

#### Example

This is minimum example, just showing one way of using this. You can use this in whatever way you want obviously.

```
import React, { Component } from 'react';
import { View } from 'react-native';
import { withGetScreen } from 'react-getscreen'

// Custom styles file
import styles from './styles';

class Test extends Component {
  render() {
        const isMobile = this.props.isMobile();
        const isTablet = this.props.isTablet();
        const isDesktop = this.props.isDesktop();
        return (
            <View style={!isMobile && [styles.nonMobileSyles]}>
                <View style={isDesktop && [styles.desktopStyles]}>
                    .....
                </View>
            </View>
        )
    }
}

export default withGetScreen(Test);
```

Supports an `options` object containing following props:
- `mobileLimit` - Max width for mobile display. default = 468
- `tabletLimit` - Max width for tablet display. default = 768
- `shouldListenOnResize` - Boolean describing whether it should listen on screen resize. default = true


#### TODOs:
1- Add a react hook for same functionality (this implementation can help)[https://github.com/devhubapp/devhub/blob/master/packages/components/src/components/context/LayoutContext.tsx].
2- Add option to have custom number of screen sizes which user can configure. Currently only 3 screen sizes are available.
