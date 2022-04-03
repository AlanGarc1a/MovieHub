import 'jest-styled-components';
import renderer from 'react-test-renderer';
import {
    NavContainer,
    Nav,
    NavTitle,
    NavItem
} from '../components/SideBar/SideBar.styles';

describe('<NavContainer> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<NavContainer />).toJSON();
        expect(tree).toHaveStyleRule('position', 'fixed');
        expect(tree).toHaveStyleRule('left', '0');
        expect(tree).toHaveStyleRule('width', '10%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('overflow', 'hidden');
        expect(tree).toHaveStyleRule('background-color', 'var(--grey)');
        expect(tree).toHaveStyleRule('z-index', '99');
    });
});

describe('<Nav> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<Nav />).toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('margin-left', '3.5rem');
        expect(tree).toHaveStyleRule('padding-top', '5rem');
        expect(tree).toHaveStyleRule('height', '100%');
    });
});

describe('<NavTitle> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<NavTitle />).toJSON();
        expect(tree).toHaveStyleRule('color', 'var(--white)');
        expect(tree).toHaveStyleRule('font-size', '2.8rem');
        expect(tree).toHaveStyleRule('letter-spacing', '0.1rem');
        expect(tree).toHaveStyleRule('text-transform', 'uppercase');
        expect(tree).toHaveStyleRule('margin-bottom', '4rem');
    });
});

describe('<NavContainer> component', () => {
    it('should have styles applied', () => {
        const tree = renderer.create(<NavItem />).toJSON();
        expect(tree).toHaveStyleRule('font-size', '2rem');
        expect(tree).toHaveStyleRule('font-weight', '300');
        expect(tree).toHaveStyleRule('margin-bottom', '4rem');
    });
});