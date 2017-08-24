import $ from 'jquery';

export function get(fileData) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `static/${fileData}`,
      async: true,
    }).done(data => {
      resolve(data);
    }).fail(err => {
      console.log(err);
      reject(err);
    });
  });
}
