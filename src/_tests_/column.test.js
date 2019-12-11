import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from 'react-redux';
import store from '../store'
import { mount, shallow } from 'enzyme';
import { ColumnList } from '../components/ColumnList';
import { Column } from '../components/Column';
import props from './initialPropData';

Enzyme.configure({ adapter: new Adapter() });

describe("<ColumnList />", () => {

    it("renders column/column's correctly", () => {
        const wrapper = mount(<Provider store={store}> <ColumnList {...props} /> </Provider>);

        expect(wrapper.find(Column).length).toEqual(props.columns.length);
    });

    it('render Add Column button', () => {
        const wrapper = mount(<Provider store={store}> <ColumnList {...props} /> </Provider>);

        expect(wrapper.find('#add-column-btn').hostNodes().length).toEqual(1)
    })

    it("renders columns title/title's correctly", () => {
        const wrapper = mount(<Provider store={store}> <ColumnList {...props} /> </Provider>);
        const columnWrapper = wrapper.find(Column);

        props.columns.forEach((column, index) => {
            expect(columnWrapper.find('div h3').at(index).text()).toEqual(column.title)
        })
    });
});