# Rocket.chat bot helpers

This package provides some extra shortcut Meteor methods intended to help Hubot scripts.

## Approach

This was an experiment in how to extend Hubot and Rocket.chat integration.

Keeping controller logic out of Hubot scripts made sense to me, but its not necessarily the best approach.

For bots to use these methods they obviously need this package added to Rocket.chat as well as the [rocketchat adapter](https://github.com/RocketChat/hubot-rocketchat).

Due to that double dependency, it might have made sense to contribute these methods directly into the adapter, but it does provide a decent boilerplate for anyone that might want to extend an instance with specific methods that aren't needed in core.

## Install

It's still unclear what's the best way to add custom per-instance packages to Rocket.chat, see [this issue](TODO:ISSUE_LINK) for more on that.

If the package repo is public, you can just use `meteor add timkinnane:rocketchat-bot-helpers`.

For private forks or local dev, I set the environment variable `PACKAGE_DIRS` to my repo path beside Rocket.Chat, then `meteor add` will look for it there as well.

e.g. `export PACKAGE_DIRS="$PACKAGE_DIRS:../meteor_packages"`

## Usage

In Hubot scripts, call bot helper methods using Meteor.call with the first argument as the helper type, then the method name as second argument.

At present, I've only got one type of helper (`botRequest`) for simple getters, but I plan to add more utility methods.

e.g. Below uses `onlineNames` method, which returns array of names of online users (not including bots).

Might output something like 'Robert, Desmond and Billie are currently online'.

```
# Use Bot Helpers class to check who's online
robot.hear /who is online/i, (res) ->
  promise = robot.adapter.callMethod('botRequest', 'onlineNames')
  promise.then (result) ->
    if result.length > 0
      names = result.join(', ').replace(/,(?=[^,]*$)/, ' and ') # convert last comma to 'and'
      res.send "#{ names } #{ if result.length == 1 then 'is' else 'are' } currently online"
    else
      res.send "Nobody is currently online... \*cricket sound\*"
    return
  , (error) ->
    res.send "Uh, sorry I don't know, something's not working"
    return
```

Method names that include fields like `allUsernames` return an 1D array of just that property.

First two methods return 2D array with properties defined in a defaults object (currently id, name, username, status, emails).

- `allUsers`
- `onlineUsers`
- `allUsernames`
- `onlineUsernames`
- `allNames`
- `onlineNames`
- `allIDs`
- `onlineIDs`

## Tests

I suck at tests, I'd be super happy to get a PR adding tests if anyone finds this useful.
