export const flexGrow = {
  none: 0,  // Equivalent to `flex-none`
  full: 1,  // Equivalent to `flex-1`
  2: 2,
  3: 3,
  4: 4,
};

export const flexDirection = {
  row: 'row' as const,
  column: 'column' as const,
};

export const flexWrap = {
  wrap: 'wrap' as const,
  nowrap: 'nowrap' as const,
  reverse: 'wrap-reverse' as const, // works with reverse flex flow
};

export const justifyContent = {
  start: 'flex-start' as const,
  center: 'center' as const,
  end: 'flex-end' as const,
  between: 'space-between' as const,
  around: 'space-around' as const,
  evenly: 'space-evenly' as const,
};

export const alignItems = {
  start: 'flex-start' as const,
  center: 'center' as const,
  end: 'flex-end' as const,
  stretch: 'stretch' as const,
  baseline: 'baseline' as const,
};

export const alignContent = {
  start: 'flex-start' as const,
  center: 'center' as const,
  end: 'flex-end' as const,
  between: 'space-between' as const,
  around: 'space-around' as const,
  stretch: 'stretch' as const,
};

