"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
const RN = require("react-native");
exports.defaultOptions = {
    mobileLimit: 468,
    tabletLimit: 768,
    shouldListenOnResize: true
};

var ScreenType;
(function (ScreenType) {
    ScreenType[ScreenType["MOBILE"] = 0] = "MOBILE";
    ScreenType[ScreenType["TABLET"] = 1] = "TABLET";
    ScreenType[ScreenType["DESKTOP"] = 2] = "DESKTOP";
})(ScreenType = exports.ScreenType || (exports.ScreenType = {}));

function withGetScreen(WrappedComp, options = exports.defaultOptions) {
    return class extends React.Component {
        constructor() {
            super();
            this.onResize = () => {
                const newSize = this.getSize(RN.Dimensions.get('window').width);
                if (newSize !== this.state.currentSize) {
                    this.setState({
                        currentSize: newSize
                    });
                }
            };
            this.isMobile = () => {
                return this.state.currentSize === ScreenType.MOBILE;
            };
            this.isTablet = () => {
                return this.state.currentSize === ScreenType.TABLET;
            };
            this.isDesktop = () => {
                return this.state.currentSize === ScreenType.DESKTOP;
            };
            this.onResize = _.throttle(this.onResize, 100);

            this.state = {
                currentSize: this.getSize(RN.Dimensions.get('window').width)
            };
        }
        componentDidMount()
        {
            RN.Dimensions.addEventListener( 'change', () =>
            {
                this.onResize();
            });
        }
        componentWillUnMount() {
            RN.Dimensions.removeEventListener('change');
        }
        getSize(size) {
            if (size <= options.mobileLimit) {
                return ScreenType.MOBILE;
            }
            else if (size >= options.tabletLimit) {
                return ScreenType.DESKTOP;
            }
            else {
                return ScreenType.TABLET;
            }
        }
        render() {
            const detectMethods = {
                isMobile: this.isMobile,
                isTablet: this.isTablet,
                isDesktop: this.isDesktop
            };
            return React.createElement(WrappedComp, Object.assign({}, detectMethods, this.props));
        }
    };
}
exports.withGetScreen = withGetScreen;
