import $ from 'jquery';
import 'selectize';

/*
$.plot($('#placeholder'), [[[0, 0], [1, 1]]], { yaxis: { max: 1 } });
 */
$('#input-tags').selectize({
  delimiter: ',',
  persist: false,
  create(input) {
    return {
      value: input,
      text: input,
    };
  },
});
/*
$('#chart').linechart({
  data: [{ title: 'toto', value: 1 }],
  width: 50,
  height: 10,
  boxSize: 16,
  line: true,
  theme: 'purple',
});
 */
