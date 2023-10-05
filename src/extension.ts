import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerTextEditorCommand('wrapInTripleBackticks', (editor, edit) => {
        let selection = editor.selection;
        let text = editor.document.getText(selection);
        edit.replace(selection, "```\n" + text + "\n```");
    });

    context.subscriptions.push(disposable);
}
