import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import middleware from './middleware'
import initializeDb from './db'
import api from './api'

let app = express()

// logger
app.use(morgan('dev'))

// 3rd party middleware
app.use(cors({
	exposedHeaders: []
}));

// connect to db
initializeDb((db: any) => {
	// internal middleware
	app.use(middleware({ db }));

	// api router
	app.use('/api', api({ db }));

	const port = process.env.API_PORT || 4000
	app.listen(port, () => {
		console.log(`Started on port ${port}`);
	});
});

export default app