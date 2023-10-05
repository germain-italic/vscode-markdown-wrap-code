"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerTextEditorCommand('wrapInTripleBackticks', (editor, edit) => {
        let selection = editor.selection;
        let text = editor.document.getText(selection);
        edit.replace(selection, "```\n" + text + "\n```");
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map