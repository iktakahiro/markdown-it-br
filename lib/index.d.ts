/// <reference types="markdown-it" />
import { MarkdownIt } from "markdown-it";
export interface BrPluginOptions {
    smallCapitalOnly?: boolean;
    addClassName?: string;
}
export declare function br_plugin(md: MarkdownIt, options?: BrPluginOptions): void;
