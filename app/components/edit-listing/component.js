import Ember from 'ember';

export default Ember.Component.extend({
  editListingForm: false,
  actions: {
    editListingForm() {
      this.set('editListingForm', true);
    },
    editListing(listing) {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        contact: this.get('contact')
      };
      this.set('editListingForm', false);
      this.sendAction('editListing', listing, params);
    }
  }
});
