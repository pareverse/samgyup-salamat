import mongoose from 'mongoose'

const MeetingSchema = mongoose.Schema(
	{
		title: {
			type: String,
			default: ''
		},
		schedule: {
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

const Meetings = mongoose.models.Meetings || mongoose.model('Meetings', MeetingSchema)

export default Meetings
