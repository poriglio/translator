var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/lingo")

var Translation = mongoose.model("translation",{
	oldLanguage	: {type: String},
	newLanguage : {type: String},
	word        : {type: String},
})

module.exports = {
	Translation : Translation
}