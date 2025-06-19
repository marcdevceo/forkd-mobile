import { Easing } from 'react-native';

export const animation = {
  durations: {
    fast: 75,
    base: 150,
    slow: 300,
  },
  easing: {
    in: Easing.in(Easing.ease),
    out: Easing.out(Easing.ease),
    inOut: Easing.inOut(Easing.ease),
  },
};
