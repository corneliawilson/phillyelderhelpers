import feathers from '@feathersjs/client'
import axios from 'axios';

const client = feathers()
	.configure(feathers.rest().axios(axios))
	.configure(feathers.authentication({
		storage: window.localStorage
	}));

export default client;