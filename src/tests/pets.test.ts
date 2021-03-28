import {PetController} from '../api/controller/pet.controller'
import {components} from "../types/petstore.types";
import {strict as assert} from 'assert'

describe('Pet controller', () => {
	it('user can add a new pet', async () => {
		const pet: components['schemas']['Pet'] = {
			id: 10,
			name: 'doggie',
			category: {
				id: 1,
				name: 'Dogs',
			},
			photoUrls: ['string'],
			tags: [
				{
					id: 0,
					name: 'string',
				},
			],
			status: 'available',
		}

		const addedPet = await new PetController().add(pet)
		assert.equal(addedPet.id, pet.id)
	})
})
