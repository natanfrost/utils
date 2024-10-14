import mustache from 'mustache';
const useMustache = () => {
  const render = (template: string, data: object) => {
    mustache.escape = function (text) {
      return text;
    };
    return mustache.render(template, data);
  };

  return { render };
};

export default useMustache;
