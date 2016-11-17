import Flexbox from '../src/index';
import * as React from 'react';

export class FlexBoxReactTest extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return (
            <Flexbox
                flexDirection={'row'}
                flexGrow={1}
                flexWrap={'wrap'}
                height={'100%'}
            >
              Hello
            </Flexbox>
        );
    }
}
