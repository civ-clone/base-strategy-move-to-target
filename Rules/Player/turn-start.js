"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRules = void 0;
const ClientRegistry_1 = require("@civ-clone/core-client/ClientRegistry");
const PathFinderRegistry_1 = require("@civ-clone/core-world-path/PathFinderRegistry");
const StrategyNoteRegistry_1 = require("@civ-clone/core-strategy/StrategyNoteRegistry");
const AIClient_1 = require("@civ-clone/core-ai-client/AIClient");
const ActiveUnit_1 = require("@civ-clone/base-player-action-active-unit/ActiveUnit");
const ContinueOnPath_1 = require("../../Routines/ContinueOnPath");
const Effect_1 = require("@civ-clone/core-rule/Effect");
const TurnStart_1 = require("@civ-clone/core-player/Rules/TurnStart");
const getRules = (clientRegistry = ClientRegistry_1.instance, pathFinderRegistry = PathFinderRegistry_1.instance, strategyNoteRegistry = StrategyNoteRegistry_1.instance) => [
    new TurnStart_1.default(new Effect_1.default((player) => {
        const client = clientRegistry.getByPlayer(player);
        // This is just for human players since AI players might
        if (client instanceof AIClient_1.default) {
            return;
        }
        player.actions().forEach((action) => {
            if (!(action instanceof ActiveUnit_1.default)) {
                return;
            }
            const strategy = new ContinueOnPath_1.default(pathFinderRegistry, strategyNoteRegistry);
            strategy.attempt(action);
        });
    })),
];
exports.getRules = getRules;
exports.default = exports.getRules;
//# sourceMappingURL=turn-start.js.map