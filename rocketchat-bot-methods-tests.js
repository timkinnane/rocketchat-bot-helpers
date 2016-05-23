// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by rocketchat-bot-methods.js.
import { name as packageName } from "meteor/rocketchat-bot-methods";

// Write your tests here!
// Here is an example.
Tinytest.add('rocketchat-bot-methods - example', function (test) {
  test.equal(packageName, "rocketchat-bot-methods");
});
