import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  contact: DS.attr('string'),
  category: DS.belongsTo('category', {async: true}),
  timestamp: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
