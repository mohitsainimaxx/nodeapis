const Users = require('../models/users.model');

exports.findAll = (req, res) => {
    Users.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };
  exports.login = (req, res, next) => {
    Users.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              userId: user.id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }
  
exports.index =  function(req, res,next) {
       res.send({'status':200,'messagge':' Site Home Page'});
};

// Display list of all books.
exports.post_list = function(req, res) {
    res.send({'status':200,'messagge':'post list'});
};
exports.create_post = function(req, res) {
    res.send({'status':200,'messagge':'Create post'});
};
exports.post_delete = function(req, res) {
    res.send({'status':200,'messagge':'Post deleted'});
};
exports.post_update = function(req, res) {
    res.send({'status':200,'messagge':'Post update'});
};
exports.post_edit = function(req, res) {
    res.send({'status':200,'messagge':'edit post'});
};
exports.post_find = function(req, res) {
    res.send({'status':200,'messagge':'find post'});
};
