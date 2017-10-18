import path = require("path")
import generate = require("markdown-it-testgen")
import markdownItBr from "../src/index"
import MarkdownIt = require("markdown-it")

describe("markdown-it-br", () => {
    const md = MarkdownIt("default", {
        html: false,
        xhtmlOut: true,
        breaks: true,
    }).use(markdownItBr)

    generate(path.join(__dirname, "fixtures/br.txt"), md)
})

describe("markdown-it-br (breaks = false)", () => {
    const md = MarkdownIt("default", {
        html: false,
        xhtmlOut: true,
        breaks: false,
    }).use(markdownItBr)

    generate(path.join(__dirname, "fixtures/breaks.txt"), md)
})
