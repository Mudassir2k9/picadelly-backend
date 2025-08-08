'use strict';

/**
 * news-landing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-landing.news-landing');
