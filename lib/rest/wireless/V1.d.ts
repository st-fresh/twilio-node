/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { CommandListInstance } from './v1/command';
import { RatePlanListInstance } from './v1/ratePlan';
import { SimListInstance } from './v1/sim';


/**
 * Initialize the V1 version of Wireless
 */
declare class V1 extends Version {
  /**
   * Initialize the V1 version of Wireless
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly commands: CommandListInstance;
  readonly ratePlans: RatePlanListInstance;
  readonly sims: SimListInstance;
}

export = V1;
