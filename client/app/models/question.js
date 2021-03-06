import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  answers: DS.hasMany('answer', { async: true }),

  title: DS.attr('string'),
  body: DS.attr('string')
});
