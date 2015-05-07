class Time
  constructor: (@hours, @minutes, @seconds) ->

  show: ->
    "#{@hours}:#{@minutes}:#{@seconds}"

module.exports = Time
