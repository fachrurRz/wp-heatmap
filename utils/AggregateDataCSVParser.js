export function importData(filename) {
  const $ = require('jquery');
  let data = null;
  $.ajax({
    url: `static/${filename}`,
    async: false,
    success: function success(d) {
      data = d;
    },
  });
  return data;
}
