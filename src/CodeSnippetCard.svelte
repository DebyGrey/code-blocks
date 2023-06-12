<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
    import { deleteSnippet, toggleFavorite } from './snippetStore';

    export let snippet : CodeSnippet = {
        title: "",
        language: "",
        code: "",
        favorite: false
    }

    export let index : number;
</script>
<div class="card">
	<header class="card-header">
		{snippet.title}
		<div class="float-right">
			<button type="button" class="btn btn-sm variant-filled-secondary" on:click={()=>toggleFavorite(index)}> {snippet.favorite ? "unfavorite" : "favorite"} </button>
			<button type="button" class="btn btn-sm variant-filled-error" on:click={()=>deleteSnippet(index)}> x </button>
		</div>
	</header>
    <section class="p-4">
<CodeBlock language={snippet.language} code={snippet.code}></CodeBlock>
    </section>
</div>
