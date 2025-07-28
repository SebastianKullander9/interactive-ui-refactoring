"use client";
import { useEffect, useRef } from "react";
import { basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { html } from "@codemirror/lang-html";


interface CodeAreaProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function CodeArea({state, setState}: CodeAreaProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<EditorView | null>(null);

    useEffect(() => {
        if (!editorRef.current) return;

        const startState = EditorState.create({
            doc: state,
            extensions: [
                basicSetup,
                html(),
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        const doc = update.state.doc.toString();
                        setState(doc);
                    }
                }),
            ],
        });

        const view = new EditorView({
            state: startState,
            parent: editorRef.current,
        });

        viewRef.current = view;

        return () => {
            view.destroy();
        };
    }, [])

    return (
        <div className="w-1/2 overflow-auto">
            <div ref={editorRef} className=""></div>
        </div>
    );
}