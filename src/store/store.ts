import { makeAutoObservable } from 'mobx';
interface stylesData {
    name: string,
    src: string,
}
class Store {
    public pageIsLoaded = false;
    public stylesArray: stylesData[] = [{
        name: 'Homepage Style 1',
        src: 'home1'
    }, {
        name: 'Homepage Style 2',
        src: 'home2'
    },{
        name: 'Homepage Style 3',
        src: 'home3'
    },{
        name: 'Homepage Style 4',
        src: 'home4'
    },{
        name: 'Homepage Style 5',
        src: 'home5'
    },{
        name: 'Homepage Style 6',
        src: 'home6'
    },{
        name: 'Multi Vendor(WC Marketplace)',
        src: 'home-multivendor'
    },{
        name: 'Homepage RTL',
        src: 'home-rtl'
    }]
    
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }
    
    public setPageIsLoaded() {
        this.pageIsLoaded = true;
    }
}

const store = new Store();
export default store;
