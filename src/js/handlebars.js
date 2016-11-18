import $ from 'jquery';
import Handlebars from 'handlebars/runtime';

Handlebars.getTemplate = (name) => {
  if(typeof Handlebars.templates === 'undefined' || typeof Handlebars.templates[name] === 'undefined') {
    $.ajax({
      url: `/handlebars/${name}.handlebars`,
      success: (data) => {
        if (typeof Handlebars.templates === 'undefined') {
          Handlebars.templates = {};
        }
        Handlebars.templates[name] = Handlebars.compile(data);
      },
      async: false
    });
  }
  return Handlebars.templates[name];
};

Handlebars.addPartials = (names, folder) => {
  const template = Handlebars.partials[name];
  if (typeof template === 'undefined') {
    const partialNames = !Array.isArray(name) ? names : [names];
    partialNames.forEach((partialName) =>{
      const partial = (folder ? (`${folder}/`) : '') + partialName;
      $.ajax({
        url: `/assets/templates/${partial}.handlebars`,
        success: (data) => {
          Handlebars.registerPartial(partialName, Handlebars.compile(data));
        },
        async: false
      });
    });
  }
};

Handlebars.registerHelper('if_eq', (a, b, opts) => {
  if (a === b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
});

Handlebars.registerHelper('select', (value, options) => {
  const $el = $('<select />').html(options.fn(this));
  $el.find(`[value="${value}"]`).attr({ selected:'selected' });
  return $el.html();
});

export default Handlebars;
