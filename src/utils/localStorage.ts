type StorageData = string | Record<string, any> | Record<string, any>[];

class LocalStorage {
  constructor(public name: string) {}

  getAll(): StorageData | null {
    const items = localStorage.getItem(this.name);
    return items ? JSON.parse(items) : null;
  }

  saveAll(value: any) {
    if (value) {
      localStorage.setItem(this.name, JSON.stringify(value));
    } else {
      throw new Error('LocalStorage에 save할 값이 없습니다.');
    }
  }

  getLength() {
    const items = this.getAll() as Record<string, any>[];
    return items && items?.length > 0 ? items.length : 0;
  }

  reset() {
    localStorage.removeItem(this.name);
  }
}

export const STORAGE_KEY = {
  Repo: 'repo',
};

export const repoStorage = new LocalStorage(STORAGE_KEY.Repo);
