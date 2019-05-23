import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('When Checkbox is used', () => {
    const mockOnChange = () => 'somefunc';

    it('should render a checkbox input field', () => {
        const wrapper = shallow(<Checkbox name={'someName'} onChange={mockOnChange} />);

        expect(wrapper.find('input[type="checkbox"]').length).toBe(1);
    });

    it('should bind a function to the onChange event', () => {
        // spy on onChange event handler function, mount the component and
        // simulate an onChange event. then assert that the spy has been
        // called once
    })
});