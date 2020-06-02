//import { config } from '../../conf.js'
const conf = require('../../conf')

//import {Before, BeforeAll,AfterAll,After} from 'cucumber'
const {Before, BeforeAll,AfterAll,After} = require('cucumber');

//import {browser} from "protractor";

const {browser} = require('protractor')

BeforeAll(async()=>{
    await browser.get(conf.config.baseUrl)
    }
)
