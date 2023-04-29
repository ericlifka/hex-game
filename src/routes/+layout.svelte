<script>

    import { object_without_properties } from "svelte/internal";

</script>
<svelte:head>
    <style>
        :root {
            --color-bg: #18202e;
            --color-text: #b8e6e3;
        }

        body {
            padding: 0;
            margin: 0;
            font-size: 18px;
            font-family: monospace;
            background-color: var(--color-bg);
            color: var(--color-text);
        }
    </style>
</svelte:head>

<slot />
