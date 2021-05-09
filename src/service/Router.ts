import { Application } from 'express';

import webRouter from '../routes/Web';
import apiRouter from '../routes/Api';


class Routes {
	public mountWeb(_express: Application): Application {
		return _express.use('/', webRouter);
	}

	public mountApi(_express: Application): Application {
		return _express.use(`/api`, apiRouter);
	}

    
}

export default new Routes;