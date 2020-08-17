import NotFound404 from '.';

describe('NotFound404', () => {
    let component;

    beforeEach(() => {
        component = shallow(<NotFound404 />);
    })

    test('it renders', () => {
        expect(component).toExist
    })
})