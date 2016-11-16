// TypeScript definitions for flexbox-react
// Project: https://github.com/nachoaIvarez/flexbox-react
// Definitions by: Nicholas Gonzalez <https://github.com/nicholasgonzalezsc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export as namespace FlexboxReact;
export = FlexboxReact;

declare namespace FlexboxReact {
    type AlignContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'stretch';

    type AlignItems = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

    type Elements = 'article' | 'aside' | 'div' | 'figure' | 'footer' | 'header' | 'main' | 'nav' | 'section';

    type FlexDisplays = 'flex' | 'inline-flex';

    type FlexDirections = 'column-reverse' | 'column' | 'row-reverse' | 'row';

    type FlexWraps = 'nowrap' | 'wrap-reverse' | 'wrap';

    type JustifyContent = 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between';

    // <Flexbox />
    interface FlexboxProps {
        alignContent?: AlignContent,
        alignItems?: AlignItems,
        alignSelf?: AlignItems,
        children?: React.ReactNode,
        display?: FlexDisplays,
        element?: Elements,
        flex?: string,
        flexBasis?: string,
        flexDirection?: FlexDirections,
        flexGrow?: number,
        flexShrink?: number,
        flexWrap?: FlexWraps,
        height?: string,
        inline?: boolean,
        justifyContent?: JustifyContent,
        margin?: string,
        marginBottom?: string,
        marginLeft?: string,
        marginRight?: string,
        marginTop?: string,
        maxHeight?: string,
        maxWidth?: string,
        minHeight?: string,
        minWidth?: string,
        order?: number,
        padding?: string,
        paddingBottom?: string,
        paddingLeft?: string,
        paddingRight?: string,
        paddingTop?: string,
        style?: Object,
        width?: string
    }

    export default class Flexbox extends React.Component<FlexboxProps, {}> {}
}
