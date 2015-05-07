Time = require './time.coffee'

class MyDate
  constructor: (@day, @mounth, @year, hours, minutes, seconds) ->
    @time = new Time hours, minutes, seconds

  show: ->
    "date is #{@day}.#{@mounth}.#{@year} #{@time.show()}"

module.exports = MyDate
