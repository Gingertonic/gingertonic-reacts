import SEO from '../pages/SEO';

describe('SEO', () => {
    let component;

    beforeEach(() => {
        component = shallow(<SEO />);
    })

    test('it renders', () => {
        expect(component).toExist;
    })
})