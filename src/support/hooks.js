import { config } from '../../conf.js'
import {Before, BeforeAll,AfterAll,After,setDefaultTimeout} from 'cucumber'
import {browser} from "protractor";

setDefaultTimeout(15000);

BeforeAll(async()=>{
    await browser.get(config.baseUrl)
    }
)
