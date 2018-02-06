$(document).ready(function(){

  function courseViewModel()
  {
    var self = this;
    var editIndex = -1;

    self.cname = ko.observable();
    self.cduration = ko.observable();
    self.cfees = ko.observable();

    self.courses = ko.observableArray( [
          {name:'jQuery Fundamentals', duration: '16 hours',fees: 7500},
        	{name:'Knockout Fundamentals', duration: '24 hours',fees: 9500},
        	{name:'RequireJs Concepts', duration: '4 hours',fees: 1500},
        	{name:'OJET Hands-On', duration: '24 hours',fees: 15000}
    ]);

    self.saveCourse = function(){
      var course = {
        name : self.cname(),
        duration : self.cduration(),
        fees: self.cfees()
      };

      if(editIndex == -1){
          self.courses.push(course);
      }
      else{
          self.courses.replace(self.courses()[editIndex], course);
          editIndex = -1;
      }
    self.cname('');
      console.log(self.courses);
    }

    self.deleteCourse = function(data, event){
      console.log(data);
      self.courses.remove(data);
      alert("Delete");
    }

    self.editCourse = function(data, event, idx){
      editIndex = idx;
      self.cname(data.name);
      self.cduration(data.duration);
      self.cfees(data.fees);
    }
  }
  ko.applyBindings(new courseViewModel());
})
