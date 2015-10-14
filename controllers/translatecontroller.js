var translationModel = require("../models/translatemodel.js")

createTranslation = function(request,response){
	var newTranslation = new translationModel.Translation(request.body)
	newTranslation.save(function(error,data){
		if(error){
			console.log("Error! Error!")
		}
		else{
			response.send(data)
		}
	})
}

module.exports = {
	createTranslation : createTranslation
}