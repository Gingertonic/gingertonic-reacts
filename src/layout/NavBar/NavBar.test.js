import NavBar from '.';
import { useState } from 'react';
import { useWindowSize } from '../../customHooks';
jest.mock('../../customHooks')

describe('NavBar mobile', () => {
    let component;

    beforeEach(() => {
        useWindowSize.mockReturnValue({ mobile: true })
        component = shallow(<NavBar />);
    })

    test('it renders', () => {
        expect(component.find('nav')).toHaveLength(1);
    })

    test('it does not show hamburger', () => {
        expect(component.find('.hamburger')).toHaveLength(1);
    })

    test('it shows mobile linkset', () => {
        expect(component.find('#linkset').hasClass('mobile')).toBe(true);
    })

    test('hides linkset by default', () => {
        expect(component.find('#linkset').hasClass('ls_closed')).toBe(true)
    })
    
    test('shows linkset on hamburger click', () => {
        component.find('.hamburger').simulate('click');
        expect(component.find('#linkset').hasClass('ls_open')).toBe(true)
    })
    
    test('hides linkset on link click', () => {
        component.find('.hamburger').simulate('click');
        component.find('.navlink').first().simulate('click');
        expect(component.find('#linkset').hasClass('ls_closed')).toBe(true)
    })

    afterEach(() => {
        jest.clearAllMocks();
    });
})

describe('NavBar desktop', () => {
    let component;

    beforeEach(() => {
        useWindowSize.mockReturnValue({ mobile: false })
        component = shallow(<NavBar />);
    })

    test('it renders', () => {
        expect(component.find('nav')).toHaveLength(1);
    })

    test('it does not show hamburger', () => {
        expect(component.find('.hamburger')).toHaveLength(0);
    })

    test('it shows desktop linkset', () => {
        expect(component.find('#linkset').hasClass('desktop')).toBe(true);
    })

    afterEach(() => {
        jest.clearAllMocks();
    });
})