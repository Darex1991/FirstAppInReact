import React            from 'react';
import ReactTestUtils   from 'react-addons-test-utils'

import chai             from 'chai';
import chaiJestSnapshot from "chai-jest-snapshot";

import ProfileComponent from '../ProfileComponent';

chai.use(chaiJestSnapshot);

test('Should render ProfileComponent correctly', () => {
    const props = {
        dataBase: {
            phones: [
                {id: 1, name: 'asd', key: 1, value: 'val 1', checked: true, highPriority: true},
                {id: 2, name: 'asdasdasd', key: 2, value: 'val 122222', checked: false, highPriority: false},
                {id: 3, name: 'asdasdasd', key: 3, value: 'val asdasd', checked: false, highPriority: true},
                {id: 4, name: '222', key: 4, value: 'val213123 1', checked: true, highPriority: false}]
        },
        updateDataBase: (newDataBase) => {
            this.dataBase = newDataBase
        }
    };

    const shallowRenderer = ReactTestUtils.createRenderer();
    const result = shallowRenderer.render(<ProfileComponent {...props} />);
    expect(result).toMatchSnapshot();
});
