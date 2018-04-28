import sanitizeHtml from 'sanitize-html';

const sanitize = string => {
  return sanitizeHtml(string, {
    allowedTags: ['p', 'a'],
    allowedAttributes: {
      a: ['href', 'target']
    }
  });
}

export default sanitize;
