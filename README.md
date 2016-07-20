# EmailObfuscator

A custom module for ProcessWire2.1+

Original version by 12345j, some maintenance by @somatonic

http://processwire.com/talk/topic/497-email-obfuscator-module

This Module will obfuscate all email on your website automaticly. It will add a javascript for doing the decoding.

## How to install:

1. Download the contents of this repository and put the folder renamed as "EmailObfuscator" into your site/modules/ folder
2. Login to processwire and got to Modules page and click "Check for new modules". You should see a note that a new module was found. Install the module, and configure to your need.
3. Done


## Changelog:

* 20/07/2016 - Added support for leaving script location configuration empty to not append the EmailObfuscator.js
* 01/07/2016 - Changed regex to account for href="mailto: and href='mailto:
* 30/03/2012 - Fixed bug with $config; added configuration for script location
