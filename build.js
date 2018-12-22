'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

const content = {
  name: 'Benjamin Cooper',
  website: 'https://benc.io',
  tag: 'I do a lot of things, hopefully some of them are useful.',
  twitter: 'bcoops222',
  github: 'bencooper222',
  keybase: 'benc222',
  npx: 'benc',
  linkedin: 'benc222',
  spacing: ' '.repeat(5),
};

// Text + chalk definitions
const descriptiveSpacing = ' '.repeat(4);
const data = {
  name: chalk.white(`${content.spacing}${content.name}`),
  handle: chalk.white(content.website),
  // work: chalk.white('Senior Cloud Developer Advocate at Microsoft'),
  // opensource: chalk.white('Node.js Community Committee ') + chalk.green('⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.yellow(content.twitter),
  // npm: chalk.gray('https://npmjs.com/') + chalk.red('~bnb'),
  github: chalk.gray('https://github.com/') + chalk.yellow(content.github),
  keybase: chalk.gray('https://keybase.io/') + chalk.yellow(content.keybase),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.yellow(content.linkedin),
  web: chalk.yellow(content.website),
  npx: chalk.red('npx') + ' ' + chalk.white(content.npx),
  // labelWork: chalk.white.bold('       Work:'),
  // labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  // labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelKeybase: chalk.white.bold('    Keybase:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
// const working = `${data.labelWork}  ${data.work}`;
// const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
// const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const keybaseing = `${data.labelKeybase}  ${data.keybase}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  `${content.spacing}"${content.tag}"` +
  newline + // Add one whole blank line
  newline +
  // working +
  // newline + // data.labelWork + data.work
  // opensourcing +
  // newline +
  // newline + // data.labelOpenSource + data.opensource
  twittering +
  // newline + // data.labelTwitter + data.twitter
  // npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  keybaseing +
  newline +
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  newline +
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.magenta(boxen(output, options)),
);
