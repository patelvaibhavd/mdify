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
        example: '<a href="#">Link Title</a><br><div style="font-size: 0.8rem; color: #888;">(Image will appear here)</div>'
    },
    {
        name: 'Code',
        syntax: '`Inline Code`\n\n```\nBlock Code\n```',
        example: '<code>Inline Code</code><br><pre style="background: #222; padding: 10px; border-radius: 5px;">Block Code</pre>'
    },
    {
        name: 'Blockquotes',
        syntax: '> Quoted text',
        example: '<blockquote style="border-left: 4px solid #6366f1; padding-left: 10px; color: #94a3b8;">Quoted text</blockquote>'
    },
    {
        name: 'Tables',
        syntax: '| Head | Head |\n|---|---|\n| Cell | Cell |',
        example: '<table border="1" style="border-collapse: collapse; width: 100%;"><tr><th>Head</th><th>Head</th></tr><tr><td>Cell</td><td>Cell</td></tr></table>'
    },
    {
        name: 'Checkboxes',
        syntax: '- [x] Done\n- [ ] Pending',
        example: '<input type="checkbox" checked disabled> Done<br><input type="checkbox" disabled> Pending'
    },
    {
        name: 'Horizontal Rule',
        syntax: '---',
        example: '<hr style="border: 0; border-top: 1px solid #334155;">'
    }
];
