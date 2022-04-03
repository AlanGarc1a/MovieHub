import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {
    MenuContainer,
    Menu,
    MenuItem,
    MenuContent,
    MenuListContent,
    MenuList,
    MenuListItem,
    MenuListLink,
    MenuChevron,
    MenuSearch,
    MenuHome
} from '../components/NavBar/Navbar.styles';

describe('<MenuContainer> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuContainer />).toJSON();
        expect(tree).toHaveStyleRule('display', 'none');
        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('z-index', '99');
        expect(tree).toHaveStyleRule('border-bottom', '0.1rem solid var(--white)');
    });
});

describe('<Menu> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<Menu />).toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('padding', '3rem');
        expect(tree).toHaveStyleRule('background-color', 'var(--secondary)');
    });
});

describe('<MenuItem> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuItem />).toJSON();
        expect(tree).toHaveStyleRule('color', 'var(--white)');
        expect(tree).toHaveStyleRule('font-size', '2rem');
        expect(tree).toHaveStyleRule('font-weight', '500');
        expect(tree).toHaveStyleRule('text-transform', 'uppercase');
    });
});

describe('<MenuContent> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuContent />).toJSON();
        expect(tree).toHaveStyleRule('background-color', 'var(--primary)');
        expect(tree).toHaveStyleRule('border-radius', '1rem');
        expect(tree).toHaveStyleRule('font-size', '1.5rem');
        expect(tree).toHaveStyleRule('padding', '1.2rem 2.5rem');
        expect(tree).toHaveStyleRule('margin-right', '2rem');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
    });
});

describe('<MenuListContent> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuListContent />).toJSON();
        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('right', '29%');
        expect(tree).toHaveStyleRule('z-index', '99');
        expect(tree).toHaveStyleRule('width', '35%');
        expect(tree).toHaveStyleRule('margin-top', '1rem');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('border-radius', '0.2rem');
        expect(tree).toHaveStyleRule('background-color', 'var(--white)');
    });
});

describe('<MenuList> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuList />).toJSON();
        expect(tree).toHaveStyleRule('list-style-type', 'none');
        expect(tree).toHaveStyleRule('width', '100%');
    });
});

describe('<MenuListItem> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuListItem />).toJSON();
        expect(tree).toHaveStyleRule('font-size', '2rem');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '0.5rem');
        expect(tree).toHaveStyleRule('text-transform', 'uppercase');
        expect(tree).toHaveStyleRule('background-color', 'var(--light-grey)', {
            modifier: ':hover'
        });
    });
});

describe('<MenuListLink> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(
            <MemoryRouter>
                <MenuListLink to="" />
            </MemoryRouter>).toJSON();
        expect(tree).toHaveStyleRule('display', 'inline-block');
        expect(tree).toHaveStyleRule('color', 'var(--primary)');
        expect(tree).toHaveStyleRule('text-decoration', 'none');
        expect(tree).toHaveStyleRule('width', '100%');
    });
});

describe('<MenuChevron> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuChevron />).toJSON();
        expect(tree).toHaveStyleRule('font-size', '1.5rem');
        expect(tree).toHaveStyleRule('margin-left', '1rem');
    });
});

describe('<MenuSearch> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuSearch />).toJSON();
        expect(tree).toHaveStyleRule('font-size', '2.2rem');
        expect(tree).toHaveStyleRule('color', 'var(--white)');
    });
});

describe('<MenuHome> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<MenuHome />).toJSON();
        expect(tree).toHaveStyleRule('text-decoration', 'none');
        expect(tree).toHaveStyleRule('color', 'var(--white)');
    });
});