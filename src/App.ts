import Loader from './service/Loader';

let dev : boolean = true;
if(dev){
    Loader.loadServer();
    Loader.loadDatabase();
}