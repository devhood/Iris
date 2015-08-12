/*jslint nomen: true, node:true */
"use strict";

var config = {

  // Server

  boot_location: "../../boot",
  configurations_path: "/configurations",
  port: 3000,

  // CMS integration
  admin_name: 'Site administrator',
  apikey: 'letmein',
  secretkey: 'letmein',

  // HTTPS
  https: false,
  https_key: '/var/www/ssl/hub.wlmg.co.uk.key',
  https_cert: '/var/www/ssl/hub_combined.crt',

  // Database
  db_server: 'localhost',
  db_port: 27017,
  db_name: 'chat-app',

  //Auth

  authTokenLength: 16,

  // Enabled modules and per-module settings
  modules: [

    {
      name: 'group_manager',
      path: './modules',
      enabled: true
    },
    {
      name: 'messages',
      path: './modules',
      enabled: true
    },
    {
      name: 'messages_replies',
      path: './modules',
      enabled: true
    }

  ]

};

var server = require(config.boot_location)(config);
