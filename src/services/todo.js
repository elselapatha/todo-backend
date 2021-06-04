const TodoModel = require('../models/todo.model');

exports.getTodoList = async function (req, res) {
  TodoModel.find({},null,{sort:{timestamp: 'desc'}}, function (err, docs) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.send(docs);
  });
};

exports.postTodo = function (req, res) {
  const { id, title, timestamp } = req.body;
  new TodoModel({
    id,
    title,
    timestamp,
    done: false,
  }).save(function (err, doc) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.send('posted');
  });
};

exports.deleteTodo = async function (req, res) {
  TodoModel.deleteOne({id:req.params.id}, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.send('deleted');
  });
};

exports.doneTodo = async function (req, res) {
  TodoModel.findOneAndUpdate(
    {id:req.params.id},
    { $set: { done: true } },
    function (err, doc) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.send('success');
    }
  );
};
