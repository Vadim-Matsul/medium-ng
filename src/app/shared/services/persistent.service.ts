import { Injectable } from '@angular/core';

@Injectable()
export class PersistentService {
  set<D>(key: string, data: D) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage: ', e);
    }
  }

  get<R>(key: string): R | null {
    try {
      const data = localStorage.getItem(key);

      if (data === null) {
        throw new Error('empty data from localStorage');
      }

      return JSON.parse(data);
    } catch (e) {
      console.error('Error getting data from localStorage: ', e);
      return null;
    }
  }
}
