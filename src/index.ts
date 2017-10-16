import { MarkdownIt } from "markdown-it"

/**
 * Return case-sensitive matched br tag
 * @param {any} state MarkdownIt state
 * @param {number} start start position at br tag
 * @returns {string | null} br tag (<br> or <br/> or <br />)
 */
function matchBR(state: any, start: number): string | null {
    const match = state.src.slice(start, start + 6).match(/^<br\s?\/?>/)
    if (match) {
        return match[0]
    }
    return null
}

export function br_plugin(md: MarkdownIt) {

    function tokenize(state: any): void {

        let token
        const max = state.posMax
        const start = state.pos
        if (start + 6 > max) {
            return
        }

        const br = matchBR(state, start)
        if (br) {
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

        // length is: <br> -> 4, <br/> -> 5, <br /> -> 6
        state.pos += br.length
    }

    // Walk through delimiter list and replace text tokens with tags
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
                token.markup = "<br>"
                token.content = ""
            }
        }
    }

    md.inline.ruler.before("emphasis", "br", tokenize)
    md.inline.ruler2.before("emphasis", "br", postProcess)
}
