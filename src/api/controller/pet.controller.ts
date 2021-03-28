import {Request} from '../client/api.request'
import {components} from "../../types/petstore.types";

export class PetController {
	async add(pet: components['schemas']['Pet']) {
		return (
			await Request.to()
				.url(`http://localhost:8080/api/v3/pet`)
				.method('POST')
				.body(pet)
				.got<components['schemas']['Pet']>()
		).body
	}
}
