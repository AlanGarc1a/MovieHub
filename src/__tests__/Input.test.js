import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { SearchInput } from '../components/Input/Search.styles';

describe('<SearchInput> component', () => {
    it('should have the styles applied', () => {
        const tree = renderer.create(<SearchInput />).toJSON();
        expect(tree).toHaveStyleRule('padding', '2rem');
        expect(tree).toHaveStyleRule('border', 'none');
        expect(tree).toHaveStyleRule('border-bottom', '0.1rem solid var(--white)');
        expect(tree).toHaveStyleRule('background', 'transparent');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('caret-color', 'var(--white)');
        expect(tree).toHaveStyleRule('color', 'var(--light-grey)', {
            modifier: '::placeholder'
        });
        expect(tree).toHaveStyleRule('outline', 'none', {
            modifier: ':focus'
        });
        expect(tree).toHaveStyleRule('color', 'var(--white)', {
            modifier: '[type="text"]'
        });
        expect(tree).toHaveStyleRule('font-size', '2.5rem', {
            modifier: '[type="text"]'
        });

    })
});