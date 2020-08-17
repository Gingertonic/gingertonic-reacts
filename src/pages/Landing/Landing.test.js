import Landing from '.';

describe('Landing', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Landing />);
    })

    test('it renders', () => {
        expect(component).toExist
    })
})