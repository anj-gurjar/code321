import mongoose from 'mongoose'

const todo = mongoose.schema({
	id: {
		type: uuid,
		required: true
	},
	item: {
		type: String,
		required: true,
		validation: {
			max: 10,
			min: 1
		}
	},
	list: {
		type: string
	}


})


