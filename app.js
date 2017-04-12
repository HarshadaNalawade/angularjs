var app = angular.module('directiveApp',[]);
app.directive('firstDirective',function(){
    return{
        restrict:'AE',
        replace:'true',
        template:'<p>I could really use a drink right now.</p>',
        link:function(scope,elem,attr){
            elem.bind('click',function(){
                elem.attr('title','just checking')
            })
        }/*,
        compile:function(elem,attr){
            return function(scope,elem,attrs) {
            //linking function here
        };
        }*/
    }
})