import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { SubHeading } from '../components/Text/Text.styles';

describe('<SubHeading> component', () => {
    it('should have subheading styles applied', () => {
        const tree = renderer.create(<SubHeading />).toJSON();
        expect(tree).toHaveStyleRule('font-size', '3.5rem');
        expect(tree).toHaveStyleRule('font-weight', '400');
        expect(tree).toHaveStyleRule('color', 'var(--white)');
        expect(tree).toHaveStyleRule('margin-bottom', '6rem');
        expect(tree).toHaveStyleRule('margin-top', '6rem');
        expect(tree).toHaveStyleRule('margin-left', '2.5rem');
    });
});