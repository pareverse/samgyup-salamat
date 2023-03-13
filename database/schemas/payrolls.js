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
		amount: {
			pay: {
				type: Number,
				default: 0
			},
			overtime: {
				type: Number,
				default: 0
			},
			grosspay: {
				type: Number,
				default: 0
			},
			leaves: {
				type: Number,
				default: 0
			},
			deductions: {
				type: Number,
				default: 0
			},
			netpay: {
				type: Number,
				default: 0
			}
		},
		attendances: {
			type: Array,
			default: []
		},
		leaves: {
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
