<script lang="ts">
    import * as GameState from "$lib/state/game-state";
    import type { Terrain } from "$lib/terrain";
    import TerrainCell from "$lib/terrain/terrain-cell.svelte";

    let grid: Terrain[][];

    GameState.subscribe(({world}) => {
        grid = world;
    });

</script>

<div class="hex-grid">
    {#each grid as row}
        <div class="row">
            {#each row as cell}
                <TerrainCell cell={cell} />
            {/each}
        </div>
    {/each}
</div>

<style>
    .hex-grid {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        flex-direction: row;
        margin-bottom: -3px;
    }

    .row:nth-child(even) {
        margin-left: 27px;
    }
</style>