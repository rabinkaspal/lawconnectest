import { css } from "styled-components";
import Color from "color";

export const color = {
  primary: "#0A49AF", // Brand Blue
  primaryLight: "#0E5FE3", // Brand Blue Light
  secondary: "#F4F5F7", //
  accent: "#2AB7FD", // Brand Accent

  textPrimary: "#0A49AF", // Brand Blue,
  textSecondary: "#0E5FE3",
  textDark: "#191919CC",
  textWhite: "#FFFFFF",
  textLink: "#FFFFFF",

  backgroundWhite: "#FFFFFF",
  backgroundMedium: "#dfe1e6",
  backgroundLight: "#F6F7F8",
  backgroundDark: "#191919",

  shadowLight: "#00000026",
};

export const sizes = {
  appNavBarHeight: 40,
  maxViewportWidth: 1196,
  appCardImageWidthDesktop: 322,
  appCardImageWidthMobile: 280,
  appCardImageHeight: 160,
  appFooterHeight: 294,
  sectionPaddingVertical: 80,
  sectionPaddingHero: 72,
  minContentHeight: 450,
};

export const zIndexValues = {
  appCardImageMobile: 101,
  appNavBar: 100,
};

export const font = {
  regular: 'font-family: "Nunito Sans", sans-serif; font-weight: normal;',
  medium: 'font-family: "Nunito Sans", sans-serif; font-weight: normal;',
  bold: 'font-family: "Nunito Sans", sans-serif; font-weight: 600;',
  bolder: 'font-family: "Nunito Sans", sans-serif; font-weight: 700;',
  size: size => `font-size: ${size}px;`,
};

export const mixin = {
  darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
  lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
  rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  boxShadowDropdown: css`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,

  safariGapTop: gap => css`
    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
      & > :not(:last-child) {
        margin-top: ${gap}px;
      }
    }
  `,

  safariGapBottom: gap => css`
    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
      & > :not(:last-child) {
        margin-bottom: ${gap}px;
      }
    }
  `,

  safariGapLeft: gap => css`
    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
      & > :not(:last-child) {
        margin-left: ${gap}px;
      }
    }
  `,

  safariGapRight: gap => css`
    @supports (-webkit-touch-callout: none) and (not (translate: none)) {
      & > :not(:last-child) {
        margin-right: ${gap}px;
      }
    }
  `,
};
