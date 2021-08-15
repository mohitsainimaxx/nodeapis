exports.index = function(req, res) {
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
