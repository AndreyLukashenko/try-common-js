MyDate = require './my-date.coffee'

class Note
  constructor: (@head, @desc)->
    @date = new MyDate 12, 5, 2015, 11, 23, 35

  show: ->
  	@date

note = new Note 'aaaaa', 'bbbbbb'
console.log note.show()
