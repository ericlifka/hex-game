<script lang="ts">
    import type { Terrain } from ".";
    import * as GameState from "$lib/services/game-state";

    export let cell: Terrain;

    function click() {
        GameState.dispatch({ type: 'click', target: { ...cell.coord }});
    }
</script>

<div class={["terrain-cell", cell.type, cell.highlight].join(' ')} on:click={click} on:keypress={click}>
    {#each cell.children as child}
        <img src={child.sprite} height=50 alt="player"/>
    {/each}
</div>

<style>
    .terrain-cell {
        display: flex;
        flex-direction: row;
        justify-content: center;
        overflow: hidden;
        min-width: 50px;
        min-height: 50px;
        border-radius: 50%;
        margin-right: 4px;
        /* border: 2px solid black; */
    }

    .terrain-cell.grass {
        background-color: green;
    }
    .terrain-cell.water {
        background-color: blue;
    }
    .terrain-cell.sand {
        background-color: yellow;
    }

    .terrain-cell.active {
        border: 3px solid white;
        margin: -3px 1px -3px -3px;
    }
</style>