// masks for Input

export type maskPropType = {
  mask: any;
  [key: string]: any;
}

export const phoneMask = { mask: '+7 000 000 00 00'};

export const dateMask = {
  mask: Date,
  min: new Date(1920, 0, 1),
  max: new Date(),
};