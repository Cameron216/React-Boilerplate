// import React from 'react';
// import renderer from 'react-test-renderer';

// import App from './App';

// describe('App', () => {
//     test('App renders', () => {
//         const component = renderer.create(<App />);
//         let tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });

import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    it('should render', () => {
        const component = shallow(<App />);

        expect(component).toMatchSnapshot();
    });
});
