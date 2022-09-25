const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema ({
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    desc: {
        require: true,
        type: String,
        max: 500,
    },
    afiliados: {
        type: Array,
        default: [],
    },
    isAproved: {
        type: Boolean,
        default: false,
    },
},  { timestamps: true })

module.exports = mongoose.model("Curso", CursoSchema);