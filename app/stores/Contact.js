import { observable, action } from 'mobx';

class Contacts {
  @observable all = [
    { id: 1, name: "Eak Motion", email: "eakpun@gmail.com" },
    { id: 2, name: "Tim Ferris", email: "tim@example.com" },
    { id: 3, name: "Deve Ramsey", email: "dev@example.com" },
  ];

  @action add(data) {
    const existing = this.all;
    this.all = existing.concat(data);
  }
}

export default new Contacts();
