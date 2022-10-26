import mongoose from 'mongoose'

const issueSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'User',
      required: true,
    },
    book: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Book',
      required: true,
    },
    returned: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Issue = mongoose.model('Issue', issueSchema)

export default Issue
