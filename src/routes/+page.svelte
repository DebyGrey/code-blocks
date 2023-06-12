<script lang="ts">
import CodeSnippetCard from '../CodeSnippetCard.svelte';
import { snippetStore, addSnippet } from '../snippetStore';
	import type { PageData } from './$types';
export let data: PageData;

let formData : CodeSnippetInput = {
	title: "",
	language: "html",
	code: ""
}

// createCodeSnippet(input : CodeSnippetInput)
snippetStore.set(data.snippets);

// snippetStore -> a local writable that allows us to store code snippets
// create/delete snippets
// favorite snippets
// +page.ts to initially load in some example snippets (mocking a database request)
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6"> Create a Code Snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input class="input" type="text" placeholder="Enter title here ..." bind:value={formData.title}/>
			</label>
			<label class="label">
				<span>Programming Language</span>
				<select class="select" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="typescript">TypeScript</option> 
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea class="textarea" rows="4" placeholder="Enter your snippet here ..." bind:value={formData.code}></textarea>
			</label>
			<button type="button" class="btn btn-sm variant-filled-primary" on:click={()=> addSnippet(formData)}>Create Snippet</button>
		</div>
		<div class="text-center py-6 ">
			<h2>My Code Snippets</h2>
		</div>
		{#each $snippetStore as snippet, index}
		<CodeSnippetCard snippet={snippet} index={index}/>
		{/each}
	</div>
</div>
