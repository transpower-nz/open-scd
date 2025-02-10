import { Insert, Remove, SetAttributes } from '@openenergytools/open-scd-core';
/** @returns action to update max clients in ReportControl element */
export declare function updateMaxClients(reportControl: Element, max: string | null): Remove | SetAttributes | Insert | null;
