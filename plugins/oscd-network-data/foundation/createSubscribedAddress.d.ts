export declare const TPNS = "https://transpower.co.nz/SCL/SCD/Communication/v1";
export declare const XSINS = "http://www.w3.org/2001/XMLSchema-instance";
/**
 * Creates either a Transpower-GSE-Subscribe or Transpower-SMV-Subscribe
 * element which has `P` elements which provide the MAC address
 * VLAN-ID and and VLAN-Priority similar to the standard's GSE and SMV
 * elements
 * @param address - SCL address element `GSE` or `SMV`.
 * @returns - an Element or undefined if nothing to create
 */
export declare function createSubscribedAddress(address: Element): Element | null;
