MyDate = require './MyDate.coffee'

class Note
  cunstructor: (@head, @desc)->
    date = MyDate 12, 5, 2015, 11, 23, 35


note = Note 'aaaaa', 'bbbbbb'
