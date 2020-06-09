/* eslint-disable */

const theme = {
  // sizes
  space: {
    0: 5,
    1: 10,
    2: 20,
    array: [12, 24, 36, 48, 60, 72, 84, 96, 128],
    titleMarginBottom: '25px',
    defaultMarginBottomMobile: '20px',
    defaultMarginBottomDesktop: '8%',
    globalDesktopPaddingX: '10%',
    fullWidth: 100,
  },
  sizes: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 24,
    6: 32,
    7: 38,
    8: 48,
    9: 64,
    10: 80,
    11: 120,
    navHeight: 70,
    pageHeaderHeight: 60,
    fullWidth: 100,
    maxWidth: 1920,
    maxSectionWidth: 1344,
  },
  breakpoints: ['0px', '320px', '480px', '720px', '1024px', '1440px', '1920px'],
};


// Grid column widths definitions including ping gutter..
theme.sizes.column1half = `${(theme.sizes.fullWidth / 12) / 2}%`;
theme.sizes.column1 = `${theme.sizes.fullWidth / 12}%`;
theme.sizes.column1andhalf = `${(theme.sizes.fullWidth / 12) * 1.5}%`;
theme.sizes.column2 = `${(theme.sizes.fullWidth / 12) * 2}%`;
theme.sizes.column3 = `${(theme.sizes.fullWidth / 12) * 3}%`;
theme.sizes.column4 = `${(theme.sizes.fullWidth / 12) * 4}%`;
theme.sizes.column5 = `${(theme.sizes.fullWidth / 12) * 5}%`;
theme.sizes.column6 = `${(theme.sizes.fullWidth / 12) * 6}%`;
theme.sizes.column7 = `${(theme.sizes.fullWidth / 12) * 7}%`;
theme.sizes.column8 = `${(theme.sizes.fullWidth / 12) * 8}%`;
theme.sizes.column9 = `${(theme.sizes.fullWidth / 12) * 9}%`;
theme.sizes.column10 = `${(theme.sizes.fullWidth / 12) * 10}%`;
theme.sizes.column11 = `${(theme.sizes.fullWidth / 12) * 11}%`;
theme.sizes.column12 = `${theme.sizes.fullWidth}%`;

theme.space.column1half = `${(theme.sizes.fullWidth / 12) / 2}%`;
theme.space.column1 = `${theme.space.fullWidth / 12}%`;
theme.space.column1andhalf = `${(theme.sizes.fullWidth / 12) * 1.5}%`;
theme.space.column2 = `${(theme.space.fullWidth / 12) * 2}%`;
theme.space.column3 = `${(theme.space.fullWidth / 12) * 3}%`;
theme.space.column4 = `${(theme.space.fullWidth / 12) * 4}%`;
theme.space.column5 = `${(theme.space.fullWidth / 12) * 5}%`;
theme.space.column6 = `${(theme.space.fullWidth / 12) * 6}%`;
theme.space.column7 = `${(theme.space.fullWidth / 12) * 7}%`;
theme.space.column8 = `${(theme.space.fullWidth / 12) * 8}%`;
theme.space.column9 = `${(theme.space.fullWidth / 12) * 9}%`;
theme.space.column10 = `${(theme.space.fullWidth / 12) * 10}%`;
theme.space.column11 = `${(theme.space.fullWidth / 12) * 11}%`;
theme.space.column12 = `${theme.space.fullWidth}%`;
theme.space.column13 = `${(theme.space.fullWidth / 12) * 13}%`;
theme.space.column14 = `${(theme.space.fullWidth / 12) * 14}%`;
theme.space.column15 = `${(theme.space.fullWidth / 12) * 15}%`;
theme.space.column16 = `${(theme.space.fullWidth / 12) * 16}%`;

theme.sizes.column12_1half = `${(theme.sizes.fullWidth / 12) * 0.5}%`;
theme.sizes.column12_1 = `${theme.space.fullWidth / 12}%`;
theme.sizes.column12_1andhalf = `${(theme.sizes.fullWidth / 12) * 1.5}%`;
theme.sizes.column12_2 = `${(theme.space.fullWidth / 12) * 2}%`;
theme.sizes.column12_3 = `${(theme.space.fullWidth / 12) * 3}%`;
theme.sizes.column12_4 = `${(theme.space.fullWidth / 12) * 4}%`;
theme.sizes.column12_5 = `${(theme.space.fullWidth / 12) * 5}%`;
theme.sizes.column12_6 = `${(theme.space.fullWidth / 12) * 6}%`;
theme.sizes.column12_7 = `${(theme.space.fullWidth / 12) * 7}%`;
theme.sizes.column12_8 = `${(theme.space.fullWidth / 12) * 8}%`;
theme.sizes.column12_9 = `${(theme.space.fullWidth / 12) * 9}%`;
theme.sizes.column12_10 = `${(theme.space.fullWidth / 12) * 10}%`;
theme.sizes.column12_11 = `${(theme.space.fullWidth / 12) * 11}%`;
theme.sizes.column12_12 = `${theme.space.fullWidth}%`;


theme.space.column12_1half = `${(theme.sizes.fullWidth / 12) * 0.5}%`;
theme.space.column12_1 = `${theme.space.fullWidth / 12}%`;
theme.space.column12_1andhalf = `${(theme.sizes.fullWidth / 12) * 1.5}%`;
theme.space.column12_2 = `${(theme.space.fullWidth / 12) * 2}%`;
theme.space.column12_3 = `${(theme.space.fullWidth / 12) * 3}%`;
theme.space.column12_4 = `${(theme.space.fullWidth / 12) * 4}%`;
theme.space.column12_5 = `${(theme.space.fullWidth / 12) * 5}%`;
theme.space.column12_6 = `${(theme.space.fullWidth / 12) * 6}%`;
theme.space.column12_7 = `${(theme.space.fullWidth / 12) * 7}%`;
theme.space.column12_8 = `${(theme.space.fullWidth / 12) * 8}%`;
theme.space.column12_9 = `${(theme.space.fullWidth / 12) * 9}%`;
theme.space.column12_10 = `${(theme.space.fullWidth / 12) * 10}%`;
theme.space.column12_11 = `${(theme.space.fullWidth / 12) * 11}%`;
theme.space.column12_12 = `${theme.space.fullWidth}%`;

theme.space.column1minus = `-${theme.space.fullWidth / 12}%`;
theme.space.column2minus = `-${(theme.space.fullWidth / 12) * 2}%`;
theme.space.column3minus = `-${(theme.space.fullWidth / 12) * 3}%`;
theme.space.column4minus = `-${(theme.space.fullWidth / 12) * 4}%`;
theme.space.column5minus = `-${(theme.space.fullWidth / 12) * 5}%`;
theme.space.column6minus = `-${(theme.space.fullWidth / 12) * 6}%`;
theme.space.column7minus = `-${(theme.space.fullWidth / 12) * 7}%`;
theme.space.column8minus = `-${(theme.space.fullWidth / 12) * 8}%`;
theme.space.column9minus = `-${(theme.space.fullWidth / 12) * 9}%`;
theme.space.column10minus = `-${(theme.space.fullWidth / 12) * 10}%`;
theme.space.column11minus = `-${(theme.space.fullWidth / 12) * 11}%`;
theme.space.column12minus = `-${theme.space.fullWidth}%`;

theme.space.column8_1half = `${(theme.space.fullWidth / 8) / 2}%`;
theme.space.column8_1 = `${(theme.space.fullWidth / 8)}%`;
theme.space.column8_2 = `${(theme.space.fullWidth / 8) * 2}%`;
theme.space.column8_3 = `${(theme.space.fullWidth / 8) * 3}%`;
theme.space.column8_4 = `${(theme.space.fullWidth / 8) * 4}%`;
theme.space.column8_5 = `${(theme.space.fullWidth / 8) * 5}%`;
theme.space.column8_6 = `${(theme.space.fullWidth / 8) * 6}%`;
theme.space.column8_7 = `${(theme.space.fullWidth / 8) * 7}%`;
theme.space.column8_8 = `${(theme.space.fullWidth / 8) * 8}%`;

theme.sizes.column8_1half = `${(theme.space.fullWidth / 8) / 2}%`;
theme.sizes.column8_1 = `${(theme.space.fullWidth / 8)}%`;
theme.sizes.column8_2 = `${(theme.space.fullWidth / 8) * 2}%`;
theme.sizes.column8_3 = `${(theme.space.fullWidth / 8) * 3}%`;
theme.sizes.column8_4 = `${(theme.space.fullWidth / 8) * 4}%`;
theme.sizes.column8_5 = `${(theme.space.fullWidth / 8) * 5}%`;
theme.sizes.column8_6 = `${(theme.space.fullWidth / 8) * 6}%`;
theme.sizes.column8_7 = `${(theme.space.fullWidth / 8) * 7}%`;
theme.sizes.column8_8 = `${(theme.space.fullWidth / 8) * 8}%`;

theme.space.column4_1 = `${(theme.space.fullWidth / 4)}%`;
theme.space.column4_2 = `${(theme.space.fullWidth / 4) * 2}%`;
theme.space.column4_3 = `${(theme.space.fullWidth / 4) * 3}%`;
theme.space.column4_4 = `${(theme.space.fullWidth / 4) * 4}%`;

theme.sizes.column4_1 = `${(theme.space.fullWidth / 4)}%`;
theme.sizes.column4_2 = `${(theme.space.fullWidth / 4) * 2}%`;
theme.sizes.column4_3 = `${(theme.space.fullWidth / 4) * 3}%`;
theme.sizes.column4_4 = `${(theme.space.fullWidth / 4) * 4}%`;



export default theme;
