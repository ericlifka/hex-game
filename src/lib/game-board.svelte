<script lang="ts">
    import { grass } from "./terrain/builders";

    let grid = [
        [ grass(), grass(), grass(), grass(), grass(), grass() ],
        [ grass(), grass(), grass(), grass(), grass(), grass() ],
        [ grass(), grass(), grass(), grass(), grass(), grass() ],
        [ grass(), grass(), grass(), grass(), grass(), grass() ],
        [ grass(), grass(), grass(), grass(), grass(), grass() ],
        [ grass(), grass(), grass(), grass(), grass(), grass() ],
    ];

</script>

<div class="hex-grid">
    {#each grid as row}
        <div class="row">
            {#each row as cell}
                <div class={"cell " + cell.type}></div>
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

    .cell {
        display: flex;
        flex-direction: row;
        min-width: 50px;
        min-height: 50px;
        border-radius: 50%;
        margin-right: 4px;
    }

    .cell.grass {
        background-color: green;
    }
</style>