import {observable, action,makeObservable} from 'mobx';

export default class HomeStore {
    constructor() {
        makeObservable(this)
    }
    @observable counter = 1
    @action add() {
        this.counter++;
    }
    @action minus() {
        this.counter--;
    }
}


