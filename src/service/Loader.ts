import Express from './Express';
import Database from './Database';


class Loader{

    constructor(){

    }

    public loadServer() : void {
        console.log("Loading Server....");
        Express.init();

    }

    public loadDatabase() : void {
        console.log("Loading Database....");
        Database.init();
    }
}

export default new Loader;