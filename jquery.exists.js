/*
  @author mail@markus-falk.com
  @description do stuff upon existence of any given element
*/
;(function($){

  $.fn.exists = function(actions){
    this.length && actions.apply(this);
  };

  return this;

})(jQuery);
