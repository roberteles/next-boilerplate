import { Router } from 'express';

let api = Router()

export default ({ db }: any) => {
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ hello: 'world' })
	})

	return api
}