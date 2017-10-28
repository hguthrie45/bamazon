var mysql = require('mysql')

var inquier = require('inquier');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"

})

var start = function() {
  inquirer.prompt({
    name: "postOrBid",
    type: "RawList",
    Message: "Would you like to [POST] an auction or [BID] on an auction?",
    choices: ["POST", "BID"]
  }).then(function(answer) {
    if (answer.postOrBid.toUpperCase() == "POST") {
      //postAuction();
    } else {
      //bid Auction
    }
  })

}

var postAuction = function() {
inquier.prompt([{
    name: "item",
    type: "imput",
    Message: "What is the item you wish to submit?"
  }, {
    name: "category",
    type: "input",
    message: "What category would you like to place it in?",
  }, {
    name: "startingBid",
    type: "input",
    message: "What would you like the starting bid to be?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      } else {
        return false;
      }
    }
  }.then(function(answer{
  	connection.query("INSERT INTO auction SET ?",{
  			itemname: answer.item,
  			category: answer.category,
  			startingBid: answer.startingBid,
  			highestBid: answer.highestBid
  	}),function(err,res){
  		console.log("Your auction was created successfully")
  		start();
  	}
  }))
}])


var bidAuction = function({
	connection.query("SELECT * FROM auctions", fucntion(err, res){
		console.log(res;
			inquirer.prompt({
				name:"choice",
				type:"RawList",
				choices: function(value){
					var choiceArray =[];
					for (var i = 0; i < res.length; i++) {
						choiceArray.push(res[i].itemname);
					}
				},
				message:"waht auction would you like to place a bid on?"

			})).then(function(answer){
			for (var i = 0; i < res.length; i++) {
				(res[i]itemname==answer.choice){
					var chosenitem = res[i];
					inquirer.prompt({
						name:"bid",
						type: "input",
						message:"How much would you like to bid?",
						validate: function(value){
							if(isNaN(value)==false){
								return true;
							} else {
								return false;
							}
							}

						}
					}).then(function(answer){
						if(chosenItem.highestBid < parseInt(answer.bid)){
							connection.query("UPDATE auctions SET ? WHERE ?",[{
								highestBid: ANSWER.BID},{
									id:chosenitem.id
								}],function(err,res){
									console.log("bid successfully placed");
									start();

								}
								}
							}]) else{
								console.log("yourBid was too low, try again");
								start();
							}
						}
					})
				}
			}
		})
	})
})
