import { PathFinderRegistry } from '@civ-clone/core-world-path/PathFinderRegistry';
import { StrategyNoteRegistry } from '@civ-clone/core-strategy/StrategyNoteRegistry';
import PlayerAction from '@civ-clone/core-player/PlayerAction';
import Priority from '@civ-clone/core-rule/Priority';
import Routine from '@civ-clone/core-strategy/Routine';
import Player from '@civ-clone/core-player/Player';
export declare class ContinueOnPath extends Routine {
  #private;
  constructor(
    pathFinderRegistry?: PathFinderRegistry,
    strategyNoteRegistry?: StrategyNoteRegistry
  );
  attempt(action: PlayerAction): boolean;
  priority(player: Player): Priority;
}
export default ContinueOnPath;
