import hljs from 'highlight.js/lib/core'

import bash from 'highlight.js/lib/languages/bash'
import php from 'highlight.js/lib/languages/php'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('php', php)
hljs.registerLanguage('javascript', javascript)

hljs.highlightAll()
