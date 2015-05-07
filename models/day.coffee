Time = require './time.coffee'

class Day
  constructor: (@date, time) ->
    @time = time
  show: ->
