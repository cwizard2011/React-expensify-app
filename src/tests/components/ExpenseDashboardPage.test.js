import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseDashboardPage  from '../../components/ExpenseDashboard';

test('should render Expense Dashboard Page correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
})