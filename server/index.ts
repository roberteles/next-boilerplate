import http from 'http'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import middleware from './middleware'
import initializeDb from './db'
import api from './api'

let app = express()
app.server = http.createServer(app)

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

	app.server.listen(process.env.API_PORT || 4000, () => {
        console.log(`Started on port ${app.server.address().port}`);
	});
});

export default app