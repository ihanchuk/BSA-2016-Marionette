var BookItemView = Backbone.Marionette.ItemView.extend({
    tagName: "tr",
    template: '#books-template'
});

module.exports = BookItemView;