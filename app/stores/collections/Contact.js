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

  @action async add(data) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    };

    const request = new Request('http://localhost:3000/v1/contacts', options);
    const response = await fetch(request);
    const status = await response.status;

    if (status === 201) {
      this.fetchAll();
    }
  }

  @action async remove(contactId) {
    this.isLoading = true;
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'DELETE',
      headers,
    };

    const request = new Request(`http://localhost:3000/v1/contacts/${contactId}`, options);
    const response = await fetch(request);
    const status = response.status;

    if (status === 200) {
      this.isLoading = false;
      this.fetchAll();
    }
  }
}

export default new Contacts();
