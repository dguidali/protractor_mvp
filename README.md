# protractor_mvp
This repository contains automated testcases for the Bühler Insights platform by using protractor together with jasmine / cucumber / mocha.

## To get started
1. install node modules:   
`npm install`
2. update webdriver manager:   
 `node node_modules\protractor\bin\webdriver-manager update --versions.gecko=v0.18.0`  
 
   The explicit gecko version is needed because of an issue with the selenium webdriver:  https://github.com/angular/webdriver-manager/issues/216

3. set username and password in  
`launch.json`
