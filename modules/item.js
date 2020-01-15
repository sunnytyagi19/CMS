const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/item', {useNewUrlParser: true});
var conn =mongoose.Collection;

var itemSchema =new mongoose.Schema({
	ItemName:String,
	tags:String,
	Category:String,
	ItemPrice:Number,
	ItemDescription:String,
	
});

var itemModel = mongoose.model('Item', itemSchema);
module.exports=itemModel;