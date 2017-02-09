import React from 'react';
import renderer from 'react-test-renderer';
import SimonTask from '../SimonTask';
test('Should render SimonTask correctly', () => {
    let props = {
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
    const tree = renderer.create(
        <SimonTask {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
