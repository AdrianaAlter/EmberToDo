import Model from 'ember-data/model';
import attr from 'ember-data/attr';
export default Model.extend({
	title: attr('string'),
	isCompleted: attr('boolean'),
	isUrgent: attr('boolean'),
	isInactive: attr('boolean')
});