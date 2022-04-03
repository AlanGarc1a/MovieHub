import 'jest-styled-components'
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {
    List,
    ListContent,
    ListItem,
    ListLink,
    ListContentDetail,
    ListContentImg,
    ListContentTitle
} from '../components/List/List.styles';

describe('<List> Component', () => {
    it('should have list component styles', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toHaveStyleRule('list-style-type', 'none');
        expect(tree).toHaveStyleRule('margin-top', '5rem');
    });
});

describe('<ListItem>', () => {
    it('should have list item styles', () => {
        const tree = renderer.create(<ListItem />).toJSON();
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '1.5rem');
        expect(tree).toHaveStyleRule('background-color', 'var(--light-grey)', {
            modifier: ':hover'
        });
    });
});

describe('<ListLink> component', () => {
    it('should have list link component styles', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <ListLink to="" />
            </MemoryRouter>).toJSON();
        expect(tree).toHaveStyleRule('text-decoration', 'none');
        expect(tree).toHaveStyleRule('color', 'var(--white)');
    })
});

describe('<ListContent>', () => {
    it('should have list content styles', () => {
        const tree = renderer.create(<ListContent />).toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
    })
});

describe('<ListContentDetail>', () => {
    it('should have list content detail styles', () => {
        const tree = renderer.create(<ListContentDetail />).toJSON();
        expect(tree).toHaveStyleRule('width', '15rem');
        expect(tree).toHaveStyleRule('height', '10rem');
        expect(tree).toHaveStyleRule('margin-right', '1.5rem');
    })
});

describe('<ListContentImg>', () => {
    it('should have list content img styles', () => {
        const tree = renderer.create(<ListContentImg />).toJSON();
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('object-fit', 'fill');
    })
});

describe('<ListContentTitle>', () => {
    it('should have list content title styles', () => {
        const tree = renderer.create(<ListContentTitle />).toJSON();
        expect(tree).toHaveStyleRule('display', 'inline-block');
        expect(tree).toHaveStyleRule('font-size', '2.5rem');
        expect(tree).toHaveStyleRule('font-weight', '300');
        expect(tree).toHaveStyleRule('color', 'var(--white)');
        expect(tree).toHaveStyleRule('align-self', 'center');
    })
});