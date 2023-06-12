import type { PageLoad } from "./$types";

export const load = (() => {
    // you can get this data from ANY SOURCE
    // fetch call here
    // graphql client
    // manually change the object here whenever you want
    return {
        snippets: [
            {
		title: "My first program",
		language: "html",
		code: "<div> This is a div </div>",
		favorite: false

	},
		{
		title: "My first program",
		language: "typescript",
		code: "console.log('Hello World');",
		favorite: false

	}
        ]
    } 
}) satisfies PageLoad; //pageLoad -> pageData (in our frontend)