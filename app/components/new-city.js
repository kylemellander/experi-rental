import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow: function() {
      this.set("addNewCity", true);
    },
    saveCity() {
      var params = {
        name: this.get('name'),
        country: this.get('country'),
        attractions: this.get('attractions')
      };
      this.set('addNewCity', false),
      this.sendAction('saveCity', params);
    }
  }
});
