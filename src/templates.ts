import escapeHTML from "escape-html";

export const codePdfTemplate = (highlightedCode: string, filename: string, filesize: string, heading: string) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter&family=JetBrains+Mono:ital,wght@0,100;0,400;0,500;0,700;1,100;1,400;1,700&display=swap" rel="stylesheet">
    <style>
        html {
        -webkit-print-color-adjust: exact;
      }

      body {
        margin: 0;
        font-family: 'Inter', sans-serif;
      }

      pre {
        margin: 0;
        white-space: pre-wrap;
        font-size: 16px;
      }

      .header {
        background-color: #000000;
        color: #ffffff;
        padding: 0.25rem 1.5rem;
        min-height: 1.5rem;

        display: flex;
        align-items: center;
      }

      /* https://stackoverflow.com/a/32546033 */

      .box {
        flex: 1;
        display: flex;
        justify-content: center;
      }

      .box:first-child > span {
        margin-right: auto;
      }

      .box:last-child  > span {
        margin-left: auto;
      }

      .filename {
        font-weight: bold;
        font-size: 16px;
      }

      pre, code, .filename {
        font-family: 'JetBrains Mono', monospace;
        font-variant-ligatures: none;
      }

      pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#f0f0f0;color:#444}.hljs-comment{color:#888}.hljs-punctuation,.hljs-tag{color:#444a}.hljs-tag .hljs-attr,.hljs-tag .hljs-name{color:#444}.hljs-attribute,.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-name,.hljs-selector-tag{font-weight:700}.hljs-deletion,.hljs-number,.hljs-quote,.hljs-selector-class,.hljs-selector-id,.hljs-string,.hljs-template-tag,.hljs-type{color:#800}.hljs-section,.hljs-title{color:#800;font-weight:700}.hljs-link,.hljs-operator,.hljs-regexp,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#bc6060}.hljs-literal{color:#78a960}.hljs-addition,.hljs-built_in,.hljs-bullet,.hljs-code{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta .hljs-string{color:#4d99bf}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700};
      </style>
  </head>
  <body>
    <div class="header">
      <div class="box">
        <span class="filename">${escapeHTML(filename)}</span>
      </div>
      <div class="box">
        <span>${escapeHTML(filesize)}</span>
      </div>
      <div class="box">
        <span>${escapeHTML(heading)}</span>
      </div>
    </div>
    <pre><code class="hljs" id="code">${highlightedCode}</code></pre>
  </body>
</html>`;

export const pagePdfTemplate = (base64image: string, filename: string, heading: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
    <style>
      html {
        -webkit-print-color-adjust: exact;
      }

      body {
        margin: 0;
        font-family: 'Inter', sans-serif;
      }

      pre {
        margin: 0;
        white-space: pre-wrap;
        font-size: 16px;
      }

      .header {
        background-color: #000000;
        color: #ffffff;
        padding: 0.25rem 1.5rem;
        min-height: 1.5rem;

        display: flex;
        align-items: center;
      }

      /* https://stackoverflow.com/a/32546033 */

      .box {
        flex: 1;
        display: flex;
        justify-content: center;
      }

      .box:first-child > span {
        margin-right: auto;
      }

      .box:last-child  > span {
        margin-left: auto;
      }

      .filename {
        font-family: 'JetBrains Mono', monospace;
        font-weight: bold;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="box">
        <span class="filename">${escapeHTML(filename)}</span>
      </div>
      <div class="box">
        <span>Page Screenshot</span>
      </div>
      <div class="box">
        <span>${escapeHTML(heading)}</span>
      </div>
    </div>
    <img src="data:image/png;base64,${base64image}" />
  </body>
</html>`;
