import { player } from '$lib/entities/builders';
import type { Terrain } from '$lib/terrain';
import { buildWorld } from '$lib/terrain/world-map';
import { writable } from 'svelte/store';
import type { Coord, GameEvent, GameModel, GameModelSubscription } from '.';

let initialModel: GameModel = {
    world: buildWorld(),
    player: player(2, 2),
    active: {x: 0, y: 0},
};
initialModel.world[2][2].children.push(initialModel.player);

const store = writable<GameModel>(initialModel);

export function subscribe(fn: GameModelSubscription): void {
    store.subscribe(fn);
}

export function dispatch(event: GameEvent): void {
    store.update(model => {
        switch (event.type) {
            case 'hover': 
                get(model.world, model.active).highlight = 'default';
                get(model.world, event.target).highlight = 'active';
                model.active = { ...event.target };
                break;

            case 'click':
                let { player, world } = model;
                let oldLocation = get(world, player.coord);
                oldLocation.children = oldLocation.children.filter( e => e !== player);
                get(world, event.target).children.push(player);
                player.coord = {...event.target};
                break;

            default:
                console.error(`Unrecognized event type: '${event.type}'`);
        }
        return model;
    })
    
}

function get(grid: Terrain[][], coord: Coord): Terrain {
    if (coord.y < 0 || coord.y >= grid.length || coord.x < 0 || coord.x >= grid[0].length) {
        throw new Error('Coord out of bounds on lookup');
    }

    return grid[coord.y][coord.x];
}