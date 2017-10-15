import path = require("path")
import generate = require("markdown-it-testgen")
import { br_plugin } from "../src/index"
import MarkdownIt = require("markdown-it")

describe("markdown-it-br", () => {
    const md = MarkdownIt()
        .use(br_plugin)

    generate(path.join(__dirname, "fixtures/br.txt"), md)
})
