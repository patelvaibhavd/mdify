export const MARKDOWN_RULES = [
    {
        name: 'Heading 1',
        syntax: '# Heading',
        example: '<h1>Heading</h1>'
    },
    {
        name: 'Heading 2',
        syntax: '## Heading',
        example: '<h2>Heading</h2>'
    },
    {
        name: 'Bold',
        syntax: '**Bold Text**',
        example: '<strong>Bold Text</strong>'
    },
    {
        name: 'Italic',
        syntax: '*Italic Text*',
        example: '<em>Italic Text</em>'
    },
    {
        name: 'Unordered List',
        syntax: '- Item 1\n- Item 2',
        example: '<ul><li>Item 1</li><li>Item 2</li></ul>'
    },
    {
        name: 'Ordered List',
        syntax: '1. First Item\n2. Second Item',
        example: '<ol><li>First Item</li><li>Second Item</li></ol>'
    },
    {
        name: 'Link',
        syntax: '[Link Text](https://example.com)',
        example: '<a href="#">Link Text</a>'
    },
    {
        name: 'Image',
        syntax: '![Alt Text](image-url)',
        example: '<span>(Image Placeholder)</span>'
    },
    {
        name: 'Code Block',
        syntax: '```javascript\nconsole.log("Hello");\n```',
        example: '<pre><code>console.log("Hello");</code></pre>'
    },
    {
        name: 'Quote',
        syntax: '> This is a quote',
        example: '<blockquote>This is a quote</blockquote>'
    },
    {
        name: 'Horizontal Rule',
        syntax: '---',
        example: '<hr>'
    },
    {
        name: 'Table',
        syntax: '| Col 1 | Col 2 |\n|---|---|\n| Val 1 | Val 2 |',
        example: '<table border="1"><tr><th>Col 1</th><th>Col 2</th></tr><tr><td>Val 1</td><td>Val 2</td></tr></table>'
    },
];
