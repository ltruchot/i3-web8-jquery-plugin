import $ from 'jquery';
import 'selectize';

$('#text-selectize').selectize({
  delimiter: ',',
  persist: false,
  create(input) {
    return {
      value: input,
      text: input,
    };
  },
});
