<script lang="ts">
    import type { Terrain } from ".";

    export let cell: Terrain;

    function click() {
        console.log('click:', cell.coord.x, cell.coord.y);
    }
</script>

<div class={"terrain-cell " + cell.type} on:click={click} on:keypress={click}>
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
</style>