import Who from '.';

describe('Who', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Who />);
    })

    test('it renders', () => {
        expect(component).toExist
    })
})