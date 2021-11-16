import { Md5 } from 'ts-md5/dist/md5';

export const Helper = {
  getGravatarUrl(key: string, size: number = 100) {
    return `https://www.gravatar.com/avatar/${Md5.hashStr(
      key
    )}?d=identicon&s=${size}`;
  },
  getHash(id: string) {
    return Md5.hashStr(id);
  },
  roundNearestHalf(num: number) {
    return Math.round(num * 2) / 2;
  },
};
