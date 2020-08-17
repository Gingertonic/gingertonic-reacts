import Footer from '.';

describe('Footer', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Footer />);
    })

    test('it renders', () => {
        expect(component.find('footer')).toHaveLength(1);
    })
})