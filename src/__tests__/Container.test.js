import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Container from '../components/Container/Container';
import { render } from '@testing-library/react';

describe('<Container> Component', () => {
    it('should have container styles', () => {
        const tree = renderer.create(<Container />).toJSON();
        expect(tree).toHaveStyleRule('max-width', '140rem');
    })

    it('should be in document', () => {
        const cont = render(<Container />);
        expect(cont).toBeDefined();
    });
});