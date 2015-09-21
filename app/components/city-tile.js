import Ember from 'ember';

export default Ember.Component.extend({
  isAttractionShowing: false,
  actions: {
    attractionShow: function() {
      this.set('isAttractionShowing', true);
    },
    attractionHide: function() {
      this.set('isAttractionShowing', false);
    },
    delete(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
