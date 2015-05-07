MyDate = require('./MyDate.coffee');

function Note(header, desc) {
  this.header = header;
  this.desc = desc;
  this.date = new MyDate(12, 5, 2015);
}

Note.prototype.show = function(){
  alert('header: ' + this.header + '\ndescription: ' + this.desc + '\n' + this.date.show())
}

var note = new Note('Очень важная запись','а это не менее важное описание');
