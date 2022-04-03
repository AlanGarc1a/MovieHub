import 'jest-styled-components';
import renderer from 'react-test-renderer';
import {
    Heading,
    HeadingContainer,
    SubHeading
} from '../components/NotFound/NotFound.styles';

describe('<Heading>', () => {
    it('should have heading styles', () => {
        const tree = renderer.create(<Heading />).toJSON();
        expect(tree).toHaveStyleRule('display', 'inline-block');
        expect(tree).toHaveStyleRule('font-size', '25rem');
        expect(tree).toHaveStyleRule('font-weight', '700');
        expect(tree).toHaveStyleRule('color', 'var(--white)');
    });
});

describe('<SubHeading>', () => {
    it('should have subheading styles', () => {
        const tree = renderer.create(<SubHeading />).toJSON();
        expect(tree).toHaveStyleRule('display', 'inline-block');
        expect(tree).toHaveStyleRule('font-size', '3rem');
        expect(tree).toHaveStyleRule('font-weight', '500');
        expect(tree).toHaveStyleRule('color', 'var(--white)');
    });
});

describe('<HeadingContainer>', () => {
    it('should have heading container styles', () => {
        const tree = renderer.create(<HeadingContainer />).toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('align-items', 'center');
    });
});