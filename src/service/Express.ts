import express from 'express';
import Routes from './Router';


class Express{
    public express: express.Application;

    constructor(){
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes (): void {
		//this.express = Routes.mountWeb(this.express);
		this.express = Routes.mountApi(this.express);
	}

    public init() : void{
        const port : number = 7676;
		this.express.listen(port, () => {
			return console.log(`Server :: Running @ 'http://localhost:${port}'`);
		});
    }
}

export default new Express();