import 'jest-styled-components';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {
    Grid,
    Row,
} from '../components/Grid/Grid';

describe('<Grid> Component', () => {
    it('should have grid props', () => {
        const tree = renderer.create(<Grid />).toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('flex-direction', 'row');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('margin-top', '10rem');
    });

    it('should be defined', () => {
        const grid = render(<Grid />);
        expect(grid).toBeDefined();
    })
});

describe('<Row> Component', () => {
    it('should have row props', () => {
        const tree = renderer.create(<Row />).toJSON();
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('gap', '5rem');
    })

    it('should be defined', () => {
        const row = render(<Row />);
        expect(row).toBeDefined();
    })
});