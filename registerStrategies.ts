import MoveToTarget from './MoveToTarget';
import { instance as strategyRegistryInstance } from '@civ-clone/core-strategy/StrategyRegistry';

strategyRegistryInstance.register(new MoveToTarget());
