export declare function setViewPort(): Promise<void>;
export declare function midEl(element: Element): [number, number];
/**
 * Avoids mouse being focussed or hovering over items during snapshots
 * As this appears to make screenshots inconsistent between browsers and environments
 */
export declare function resetMouseState(): Promise<void>;
