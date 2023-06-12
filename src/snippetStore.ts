import { writable, get } from 'svelte/store'

// SnippetStore
// Code Snippet
// Title, code, language, Favorite
export const snippetStore = writable<CodeSnippet[]>([]); //[codeSnippet1, codeSnippet2, e.t.c]

// addSnippet
export function addSnippet(input: CodeSnippetInput) {
    const snippets = get(snippetStore); // $snippeStore -> listen to the changes of the value of the snippetStore
    snippetStore.update(() => { //codeSnippet[]
        return[ { ...input, favorite: false} , ...snippets]

    })
}

// deleteSnippet
export function deleteSnippet(index: number) { // if you have a db, delete by ID?
    const snippets = get(snippetStore); 
    snippets.splice(index, 1); // removes 1 item from index "index"
    snippetStore.update(() => { //codeSnippet[]
        return snippets;
    })
}

// toggleFavorite
export function toggleFavorite(index: number) { // if you have a db, delete by ID?
    const snippets = get(snippetStore); 
    snippetStore.update(() => { // [ { favorite: true, favorite: false }]
        return snippets.map((snippet, snippetIndex) => {
            if (snippetIndex === index) {
                return { ...snippet, favorite: !snippet.favorite }
            }
            return snippet; 
        })
    });
}