var tabsDeluxe = (function () {
  
  'use strict;'
  
  //
  // Variables
  //
  
  // Public APIs
  var publicAPIs = {};
  var settings;
  
  // Defaults
  var defaults = {
    hideAll: true,
    hiddenDivs: 'tab-pane',
    activation: 'tabs',
    activators: 'tabs li a'
  };
  
  //
  // Methods
  //
  
  /**
  * Merge two or more objects. Returns a new object.
  * @param {Object}   objects  The objects to merge together
  * @returns {Object}          Merged values of defaults and options
  */
  var extend = function () {
    
    // Variables
    var extended = {};
    
    // Merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          extended[prop] = obj[prop];
        }
      }
    };
    
    // Loop through each object and conduct a merge
    for (var i = 0; i < arguments.length; i++) {
      merge(arguments[i]);
    }
    
    return extended;
    
  };
  
  var showTab = function () {
    // collect the content
    var tabDivs = Array.from(document.querySelectorAll('.' + settings.hiddenDivs));
    // hide the content
    tabDivs.forEach(function (tab) {
      tab.style.display = 'none';
    })

    // Listen for clicks on the activators
    document.documentElement.addEventListener('click', function (event) {
      // If the clicked element has tabs as the closest class, it's a match!
      if (event.target.closest('.' + settings.activation)) {
        var elToShow = (event.target.hash)
        var elToShow = elToShow.replace('#', '')
        tabDivs.forEach(function (tab) {
          tab.style.display = 'none';
          // console.log(tab.id);
          if (tab.id == elToShow) {
            tab.style.display = 'block'
          }
        })
      }
    }, false);



    // If we should ask for the visitor's name
    // if (settings.askForName) {
    
    // Ask for their name using the nameMessage setting
    // var name = prompt(settings.nameMessage);
    
    // If they provide a name, use it.
    // Otherwise, fall back to "friend"
    // if (name) {
    //   alert(settings.helloMessage(name));
    // } else {
    //   alert(settings.helloMessage('friend'));
    // }
    // }
    
    // Otherwise, just say hi
    // else {
    //   alert(settings.helloMessage(''));
    // }
    
  };
  
  publicAPIs.init = function (options) {
    // Merge user options into the defaults
    settings = extend(defaults, options || {});
    showTab();
    
  };
  
  return publicAPIs;
  
})();

tabsDeluxe.init()

// tabsDeluxe.init({
//   hideAll: false
// });