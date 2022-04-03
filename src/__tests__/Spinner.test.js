import 'jest-styled-components';
import renderer from 'react-test-renderer';
import {
    SpinnerContent,
    SpinnerBox,
    LoadingSpinner
} from '../components/Spinner/SpinnerStyles';
import { css, keyframes } from "styled-components";


describe('<SpinnerContent>', () => {
    it('it should have the styles applied', () => {
        const tree = renderer.create(<SpinnerContent />).toJSON();
        expect(tree).toHaveStyleRule('position', 'relative');
    });
});

describe('<SpinnerBox>', () => {
    it('it should have the styles applied', () => {
        const tree = renderer.create(<SpinnerBox />).toJSON();
        expect(tree).toHaveStyleRule('position', 'absolute');
        expect(tree).toHaveStyleRule('left', '38%');
        expect(tree).toHaveStyleRule('margin-top', '10rem');
    });
});

describe('<LoadingSpinner>', () => {
    it('it should have the styles applied', () => {
        const tree = renderer.create(<LoadingSpinner />).toJSON();
        expect(tree).toHaveStyleRule('border', '15rem solid var(--grey)');
        expect(tree).toHaveStyleRule('border-radius', '50%');
        expect(tree).toHaveStyleRule('border-top', '0.5rem solid var(--light-grey)');
        expect(tree).toHaveStyleRule('width', '15rem');
        expect(tree).toHaveStyleRule('height', '15rem');
        expect(tree).toHaveStyleRule('margin', '0.3rem auto');
    });
});