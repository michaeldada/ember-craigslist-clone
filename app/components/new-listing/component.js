import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newListingForm() {
      this.set('newListingForm', true);
    },
    newListing() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        contact: this.get('contact'),
        category: this.get('category')
      };
      this.sendAction('newListing', params);
      this.set('title', null);
      this.set('description', null);
      this.set('content', null);
      this.set('newListingForm', false);
    }
  }
});
