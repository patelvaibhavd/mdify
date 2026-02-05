export const MARKDOWN_RULES = [
    {
        name: 'Headers',
        syntax: '# H1\n## H2\n### H3',
        example: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>'
    },
    {
        name: 'Emphasis',
        syntax: '**Bold**\n*Italic*\n~~Strikethrough~~',
        example: '<strong>Bold</strong><br><em>Italic</em><br><del>Strikethrough</del>'
    },
    {
        name: 'Lists',
        syntax: '- Unordered Item\n1. Ordered Item',
        example: '<ul><li>Unordered Item</li></ul><ol><li>Ordered Item</li></ol>'
    },
    {
        name: 'Links & Images',
        syntax: '[Title](url)\n![Alt](url)',
        example: '<a href="#">Link Title</a><br><div class="image-placeholder">(Image will appear here)</div>'
    },
    {
        name: 'Code',
        syntax: '`Inline Code`\n\n```\nBlock Code\n```',
        example: '<code>Inline Code</code><br><pre><code>Block Code</code></pre>'
    },
    {
        name: 'Blockquotes',
        syntax: '> Quoted text',
        example: '<blockquote>Quoted text</blockquote>'
    },
    {
        name: 'Tables',
        syntax: '| Head | Head |\n|---|---|\n| Cell | Cell |',
        example: '<table><thead><tr><th>Head</th><th>Head</th></tr></thead><tbody><tr><td>Cell</td><td>Cell</td></tr></tbody></table>'
    },
    {
        name: 'Checkboxes',
        syntax: '- [x] Done\n- [ ] Pending',
        example: '<ul class="task-list"><li class="task-list-item"><input type="checkbox" checked disabled> Done</li><li class="task-list-item"><input type="checkbox" disabled> Pending</li></ul>'
    },
    {
        name: 'Horizontal Rule',
        syntax: '---',
        example: '<hr>'
    }
];
