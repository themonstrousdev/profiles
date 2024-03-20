$(window).ready(()=> {

  $('radio').change(()=> {
    // find the corresponding label
    let label = $(this).attr('id');

    // remove the active class from all labels
    $('label').removeClass('active');

    // add active tag to the selected label
    $(`label[for=${label}]`).addClass('active');
  });
  
  $('.friend').each(function() {
    let friend = $(this);
    let pic = friend.attr("pic");
    let link = friend.attr("link");
    let desc = friend.attr("description");
    let name = friend.attr("name");

    if(pic) {
      friend.attr('style', `background-image: url(${pic}); background-size: contain; background-color: black`);
    }

    if(link) {
      friend.wrapAll(`<a href="${link}" target="_blank"></a>`);
    }

    if(desc || name) {
      friend.hover((e)=> {
        // find mouse position
        let x = e.clientX;
        let y = e.clientY;

        // create a new div
        $('<div>', {
          class: 'description',
          css: {
            top: y,
            left: x
          }
        }).appendTo('body');

        if(desc) {
          $('<div>', {
            class: 'description-text',
            html: desc
          }).appendTo('.description');
        }

        if(name) {
          $('<h2>', {
            text: name
          }).prependTo('.description-text');
        }
      }, () => {
        $('.description').remove();
      });
    }

  });
});