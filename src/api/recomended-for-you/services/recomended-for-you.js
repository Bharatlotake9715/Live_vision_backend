'use strict';

/**
 * recomended-for-you service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recomended-for-you.recomended-for-you');
