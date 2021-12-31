const Todo = require("../models/Todo");

const index = (req, res, next) => {
  Todo.find().exec( function(err, posts){
    if(err){
      res.json({error:err.message})
      console.log(err);
    }
    res.json(posts); 
  });
};

const store = (req, res, next) => {
  let item = new Todo({
    title: req.body.title,
  });
  item
    .save()
    .then((response) => {
      res.json({
        message: "Item Added Succesfully",
        data: response
      });
    })
    .catch((err) => {
      res.json({
        message: "Something Went Wrong While Adding The Item",
        error: err.message
      });
    });
};

const updateItem = (req, res, next) => {
  let itemId = req.params.itemId;
  let updatedPost = {
    isCompleted: req.body.isCompleted,
  };
  Todo.findByIdAndUpdate(itemId, { $set: updatedPost })
    .then((response) => {
      res.json({
        message: "Updated Successfully"
      });
    })
    .catch((error) => {
        console.log(error)
      res.json({
        message: "Error Occered While Updating",
        error: error.message
      });
    });
};


const deleteItem = (req, res, next) => {
  let itemId = req.params.itemId;
  Todo.findByIdAndRemove(itemId, function (err, docs) {
    if (err){
      res.json({
        message: "Error Occered While Removing",
        error: err.message
      });
    }
    else{
        console.log("Removed Item : ", docs);
        res.json({
          message: "Successfully deleted the item",
        });
    }
});
};

module.exports = {
  index,
  store,
  updateItem,
  deleteItem
};
