import mongoose from 'mongoose'

const PayrollSchema = mongoose.Schema(
	{
		user: {
			type: String,
			default: ''
		},
		position: {
			type: Object,
			default: {}
		},
		schedule: {
			type: Object,
			default: {}
		},
		attendances: {
			type: Array,
			default: []
		},
		deductions: {
			type: Array,
			default: []
		},
		status: {
			type: Boolean,
			default: false
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

const Payrolls = mongoose.models.Payrolls || mongoose.model('Payrolls', PayrollSchema)

export default Payrolls
