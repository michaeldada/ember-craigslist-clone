import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    deleteListing(listing) {
      var id = listing.category.id
      listing.destroyRecord();
      this.transitionTo('category', id)
    },
    editListingForm() {
      this.set('editListingForm', true);
    },
    editListing(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key, params[key]);
        }
      });
      listing.save();
    }
  }

});
