import path = require("path")
import generate = require("markdown-it-testgen")
import { br_plugin } from "../src/index"
import MarkdownIt = require("markdown-it")

describe("markdown-it-br", () => {
    const md = MarkdownIt("default", {
        html: false,
        xhtmlOut: true,
        breaks: true,
    }).use(br_plugin)

    generate(path.join(__dirname, "fixtures/br.txt"), md)
})

describe("markdown-it-br (breaks = false)", () => {
    const md = MarkdownIt("default", {
        html: false,
        xhtmlOut: true,
        breaks: false,
    }).use(br_plugin)

    generate(path.join(__dirname, "fixtures/breaks.txt"), md)
})
