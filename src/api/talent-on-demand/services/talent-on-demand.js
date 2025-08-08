'use strict';

/**
 * talent-on-demand service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::talent-on-demand.talent-on-demand');
