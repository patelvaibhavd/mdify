export const MARKDOWN_RULES = [
    { name: 'Heading 1', syntax: '# Heading' },
    { name: 'Heading 2', syntax: '## Heading' },
    { name: 'Bold', syntax: '**Bold Text**' },
    { name: 'Italic', syntax: '*Italic Text*' },
    { name: 'Unordered List', syntax: '- Item 1\n- Item 2' },
    { name: 'Ordered List', syntax: '1. First Item\n2. Second Item' },
    { name: 'Link', syntax: '[Link Text](https://example.com)' },
    { name: 'Image', syntax: '![Alt Text](image-url)' },
    { name: 'Code Block', syntax: '```javascript\nconsole.log("Hello");\n```' },
    { name: 'Quote', syntax: '> This is a quote' },
    { name: 'Horizontal Rule', syntax: '---' },
    { name: 'Table', syntax: '| Col 1 | Col 2 |\n|---|---|\n| Val 1 | Val 2 |' },
];
