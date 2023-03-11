import mongoose from 'mongoose'

const ScheduleSchema = mongoose.Schema(
	{
		timein: {
			type: String,
			default: ''
		},
		timeout: {
			type: String,
			default: ''
		},
		created: {
			type: String,
			default: ''
		},
		updated: {
			type: String,
			default: ''
		}
	},
	{ timestamps: true }
)

const Schedules = mongoose.models.Schedules || mongoose.model('Schedules', ScheduleSchema)

export default Schedules
