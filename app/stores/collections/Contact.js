import { observable, action } from 'mobx';

class Contacts {
  @observable all = [];
  @observable isLoading = false;

  @action async fetchAll() {
    this.isLoading = false;
    const response = await fetch('http://localhost:3000/v1/contacts');
    const status = await response.status;

    if (status === 200) {
      this.all = await response.json();
    }
  }

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }
}

export default new Contacts();
