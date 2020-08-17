import Gallery from '.';

describe('Gallery', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Gallery />);
    })

    test('it renders', () => {
        expect(component).toExist
    })
})