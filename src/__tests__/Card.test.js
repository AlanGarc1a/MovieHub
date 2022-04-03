import { render } from '@testing-library/react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import {
    MovieImage,
    MovieTitle,
    MovieImageBox,
    MovieRatingBox,
    MovieBox
} from '../components/Card/Card.styles';
import MovieCard from '../components/Card/Card';
import { MemoryRouter } from 'react-router-dom';

describe('<Card> Component', () => {

    it('should have movie img properties', () => {
        const tree = renderer.create(<MovieImage />).toJSON();
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('border-radius', '0.5rem');
        expect(tree).toHaveStyleRule('object-fit', 'cover');
        expect(tree).toHaveStyleRule('transition', 'all 0.2s ease-out');
        expect(tree).toHaveStyleRule('transition', 'all 0.2s ease-in', { modifier: ':hover' });
        expect(tree).toHaveStyleRule('opacity', '1', { modifier: ':hover' });
    });

    it('should have Movie Title properties', () => {
        const tree = renderer.create(<MovieTitle />).toJSON();
        expect(tree).toHaveStyleRule('display', 'inline-block');
        expect(tree).toHaveStyleRule('color', 'var(--white)');
        expect(tree).toHaveStyleRule('font-size', '1.6rem');
        expect(tree).toHaveStyleRule('font-weight', '400');
    });

    it('should have Movie image box properties', () => {
        const tree = renderer.create(<MovieImageBox />).toJSON();
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '30rem');
        expect(tree).toHaveStyleRule('box-shadow', '0.9rem 0.9rem 1.2rem var(--black)');
    });

    it('should have Movie rating box properties', () => {
        const tree = renderer.create(<MovieRatingBox />).toJSON();
        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('top', '3%');
        expect(tree).toHaveStyleRule('left', '79%');
        expect(tree).toHaveStyleRule('background', 'var(--light-green)');
        expect(tree).toHaveStyleRule('border-radius', '50%');
        expect(tree).toHaveStyleRule('width', '3rem');
        expect(tree).toHaveStyleRule('height', '3rem');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('font-size', '1.5rem');
        expect(tree).toHaveStyleRule('font-weight', '400');
    });

    it('should have Movie box properties', () => {
        const tree = renderer.create(<MovieBox />).toJSON();
        expect(tree).toHaveStyleRule('width', '22rem');
        expect(tree).toHaveStyleRule('position', 'relative');
        expect(tree).toHaveStyleRule('cursor', 'pointer');
    });
});

describe('<MovieCard> Component', () => {
    it('should be defined', () => {
        const card = render(
            <MemoryRouter>
                <MovieCard />
            </MemoryRouter>
        );
        expect(card).toBeDefined();
    })
});