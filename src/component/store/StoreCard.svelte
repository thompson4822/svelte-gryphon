<script lang="ts">
    import type {Store} from "../../model/Store";
    import { fade } from 'svelte/transition';
    export let store: Store;

    const formattedPhone = (input: string): string => {
        const match = input.match(/^(\d{3})(\d{3})(\d{4})$/);
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    // TODO - Should probably just have a name field on the back end!
    const nameFromEmail = (input: string): string => {
        const match = input.match(/^([a-zA-Z]+)(\d+)@.*$/)
        const name = match[1].charAt(0).toUpperCase() + match[1].slice(1)
        return `${name} ${match[2]}`
    }

    $: storePhone = formattedPhone(store.phone)
    $: storeName = nameFromEmail(store.email)
</script>
<div class="store card text-center shadow-2xl hover:bg-gray-800" transition:fade>
    <figure class="px-10 pt-10">
        <img src="data:image/png;base64,{store.image}" class="rounded">
    </figure>
    <div class="card-body">
        <h2 class="card-title">{storeName}</h2>
        <div class="justify-center card-actions">
            <p>{storePhone}</p>
            <a class="link link-accent" href="mailto:{store.email}">{store.email}</a>
            <button class="btn glass">More info</button>
        </div>
    </div>
</div>
