import { player } from '$lib/entities/builders';
import { buildWorld } from '$lib/terrain/world-map';
import { writable } from 'svelte/store';
import type { GameEvent, GameModel, GameModelSubscription } from '.';

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
            case 'click': 
                model.world[model.active.y][model.active.x].highlight = 'default';
                model.world[event.target.y][event.target.x].highlight = 'active';
                model.active = { ...event.target }
                break;

            default:
                console.error(`Unrecognized event type: '${event.type}'`);
        }
        return model;
    })
    
}
