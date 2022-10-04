import {
  ClientRegistry,
  instance as clientRegistryInstance,
} from '@civ-clone/core-client/ClientRegistry';
import {
  PathFinderRegistry,
  instance as pathFinderRegistryInstance,
} from '@civ-clone/core-world-path/PathFinderRegistry';
import {
  instance as strategyNoteRegistryInstance,
  StrategyNoteRegistry,
} from '@civ-clone/core-strategy/StrategyNoteRegistry';
import AIClient from '@civ-clone/core-ai-client/AIClient';
import ActiveUnit from '@civ-clone/base-player-action-active-unit/ActiveUnit';
import ContinueOnPath from '../../Routines/ContinueOnPath';
import Effect from '@civ-clone/core-rule/Effect';
import Player from '@civ-clone/core-player/Player';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import TurnStart from '@civ-clone/core-player/Rules/TurnStart';

export const getRules = (
  clientRegistry: ClientRegistry = clientRegistryInstance,
  pathFinderRegistry: PathFinderRegistry = pathFinderRegistryInstance,
  strategyNoteRegistry: StrategyNoteRegistry = strategyNoteRegistryInstance
): TurnStart[] => [
  new TurnStart(
    new Effect((player: Player) => {
      const client = clientRegistry.getByPlayer(player);

      // This is just for human players since AI players might
      if (client instanceof AIClient) {
        return;
      }

      player.actions().forEach((action: PlayerAction) => {
        if (!(action instanceof ActiveUnit)) {
          return;
        }

        const strategy = new ContinueOnPath(
          pathFinderRegistry,
          strategyNoteRegistry
        );

        strategy.attempt(action);
      });
    })
  ),
];

export default getRules;
