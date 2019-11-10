let user = window.App.user;

module.exports = {
    owns (model, prop = 'id') {
        console.log(model, prop);
        console.log(model[prop]);
        return model[prop] === user.id;
    },

    isAdmin () {
        return user.is_admin;
    }
};
