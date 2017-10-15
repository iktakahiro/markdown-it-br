import { MarkdownIt } from "markdown-it"

// This interface is not used yet.
export interface BrPluginOptions {
    smallCapitalOnly?: boolean
    addClassName?: string // need to sanitize
}

export function br_plugin(md: MarkdownIt, options: BrPluginOptions = {}) {

    function tokenize(state): void {
        let token
        const max = state.posMax
        const start = state.pos
        const marker = state.src.charCodeAt(start)
        if (start + 4 > max) {
            return
        }

        if (marker === 60 /* < */ &&
            (state.src.charCodeAt(start + 1) === 98) /*  b */ &&
            (state.src.charCodeAt(start + 2) === 114) /* r */ &&
            state.src.charCodeAt(start + 3) === 62 /* > */
        ) {
            state.scanDelims(state.pos, true)
            token = state.push("text", "", 0)
            token.content = "<br>"
            state.delimiters.push({
                marker: token.content,
                jump: 0,
                token: state.tokens.length - 1,
                level: state.level,
                end: -1,
                open: true,
                close: true,
            })
        } else {
            // neither
            return
        }

        state.pos += 4
    }

    // Walk through delimiter list and replace text tokens with tags
    //
    function postProcess(state) {
        let i
        let delim
        let token
        const delimiters = state.delimiters
        const max = state.delimiters.length

        for (i = 0; i < max; i++) {
            delim = delimiters[i]

            if (delim.marker === "<br>") {
                token = state.tokens[delim.token]
                token.type = "br_openclose"
                token.tag = "br"
                token.nesting = 1
                token.markup = "<br />"
                token.content = ""
            }
        }
    }

    md.inline.ruler.before("emphasis", "br", tokenize)
    md.inline.ruler2.before("emphasis", "br", postProcess)
}
