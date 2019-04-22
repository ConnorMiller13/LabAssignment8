export class LocalStorageService<T> {

    constructor(private key: string) {

    }

    saveItemsToLocalStorage(items: Array<T> | T) {
        const savedItems = localStorage.setItem(this.key, JSON.stringify(items));
        return savedItems;
      }

      getItemsFromLocalStorage(key?: string) {
        let savedItems;
        if (key != null ) {
            const savedItems = JSON.parse(localStorage.getItem(key));
        } else {
            const savedItems = JSON.parse(localStorage.getItem(this.key));
        }
        const savedContacts = JSON.parse(localStorage.getItem(this.key));
        return savedContacts;
      }

      clearItemFromLocalStorage(key?: string) {
          if (key != null) {
            const items = null;
            localStorage.setItem(key, JSON.stringify(items));
          } else {
              localStorage.clear();

          }
          localStorage.clear();
      }
}
