type ValueValidator = (value: string) => boolean;

type MapValidators<T extends keyof typeof RegExpKeys> = {
  [KEY in (typeof RegExpKeys)[T]]: ValueValidator;
};

export enum RegExpKeys {
  isImageUrl,
  isCorrectPassword,
}

export const RegExpMap: MapValidators<keyof typeof RegExpKeys> = {
  [RegExpKeys.isImageUrl]: (v) => /^https(.*)\.(jpg|jpeg|png)$/i.test(v),
  [RegExpKeys.isCorrectPassword]: (v) => /^(?=.*[a-zA-Z])(?=.*\d).+/.test(v),
};
