#!/usr/bin/node
var express = require('express');
var escape = require('escape-html');
var args = process.argv.slice(2);
var html = escape(args[0]);
