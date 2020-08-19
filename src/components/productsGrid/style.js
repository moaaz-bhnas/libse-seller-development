import styled from 'styled-components';
import theme from '../../shared/theme';

export const Grid = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 -1em;
  padding-left: 0;
  flex-wrap: wrap;

  .productsGrid__imageSlider {
    margin-bottom: .8em;
  }
`;

export const StyledProduct = styled.li`
  flex: 0 0 33.333%;
  padding: 0 1em;
  margin-bottom: 2em;

  display: flex;
`;

export const ProductContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const ProductLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ProductName = styled.p`
  margin: .2em auto .2em;
  text-align: center;
  max-width: 15em;
  line-height: 1.25;
`;

export const Colors = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  margin: 0 auto .65em;
  max-width: 15em;
`;

export const Color = styled.li`
  margin: 0 .5em;
`;

export const ColorButton = styled.button`
  display: block;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 1px solid #bbb;
  border: #e2e2e2 1px solid;
  background-color: ${props => props.color};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    border-radius: 50%;
    border: #bbb 1px solid;
  }

  &[data-active="true"] {
    &::after {
      border-color: #222;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.p`
  color: ${theme.text.interactive};
  margin: 0 .2em 0 0;
`;

export const Abbr = styled.abbr`
  text-decoration: none;
  font-variant: all-small-caps;
`;

export const LikeButton = styled.button`
  width: 2.5em;
  height: 2.5em;
  display: flex;
  background: transparent;
  border: none;
  padding: .5em;
  margin-right: -.5em;

  .product__likeSvg {
    width: 100%;
    fill: transparent;
    stroke: ${theme.bg.accent};
    stroke-width: 30;
    transition: .1s fill;
  }

  &[data-favorite="true"] {
    .product__likeSvg {
      fill: ${theme.bg.accent};
    }
  }
`;