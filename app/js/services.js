'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('bootstrapVariablesEditor.services', []).
<<<<<<< HEAD
  value('version', '0.1').
  factory('ap_less', function() {
=======
  value('version', '0.2').
  factory('ap_less',['$http', function($http) {
>>>>>>> master
  
    var lessEngine = {};
    
    lessEngine.importVariables = function ($scope, string) {
        var regex = {
            variable: /^\s*([^:]*)\s*:\s*([^\\;]*)/,
            emptyLine: /(^\s*$)/,
            comment: /(^\s*\/\/.*[^\r\n]*)/,
            commentMulti: /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//
        };
        
        var parse = function (data){
            if(regex.commentMulti.test(data)){
                data = data.replace(regex.commentMulti,'');
<<<<<<< HEAD
                console.log(data);
=======
>>>>>>> master
            }
            var variables = [];
            var lines = data.split(/\r\n|\r|\n/);
            lines.forEach( 
                function(line){
                    if(regex.comment.test(line)){
                        return;
                    }else if(regex.emptyLine.test(line)){
                        return;
                    } else if(regex.variable.test(line)){
                        var match = line.match(regex.variable);
                        variables[match[1]] = match[2];
                    };
                }
            );
            return variables;
        };
        
        var vars = parse(string);
        for (var i = 0; i < $scope.variables.length; i++ ) {
    		for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
    		    if (vars[$scope.variables[i].data[j].key]) {
                    $scope.variables[i].data[j].value = vars[$scope.variables[i].data[j].key];
                    delete vars[$scope.variables[i].data[j].key];
                }
            }
    	}
    	
    	var myVars = {
    	    name: 'My Variables',
    	    data: []
    	};
    	
    	for (var key in vars) {
<<<<<<< HEAD
    	    console.log('toto');
=======
>>>>>>> master
    	    var type = 'text';
    	    if (key.toLowerCase().indexOf('color')) {
    	        type = 'color';
    	    }
    	    if (key.toLowerCase().indexOf('fontfamily')) {
    	        type = 'font';
    	    }
    	    var myVar = {
    	        key: key,
    	        value: vars[key],
    	        type: type
    	    };
    	    myVars.data.push(myVar);
    	    
    	}
    	$scope.variables.push(myVars);
        return $scope;
    }
    
<<<<<<< HEAD
    lessEngine.getVariables = function ($scope) {
    	var variables = {};
    	for (var i = 0; i < $scope.variables.length; i++ ) {
    		for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
                variables[$scope.variables[i].data[j].key] = $scope.variables[i].data[j].value;
            }
    	}
        return variables;
=======
    lessEngine.getVariables = function ($scope, all) {
    	var variables = {};
        var fonts = [];
    	for (var i = 0; i < $scope.variables.length; i++ ) {
            if (all == false && $scope.variables[i].name == "Private") {
                $scope.variables.splice(i,1);
            }else{
                for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
                    // if type =  font, push it to an array 
                    if ($scope.variables[i].data[j].type == "font") {
                        fonts.push($scope.variables[i].data[j].value);
                    };
                    variables[$scope.variables[i].data[j].key] = $scope.variables[i].data[j].value;
                }   
            }
    	}
        return{
            variables: variables,
            fonts: fonts
        }
>>>>>>> master
    };
    
    /* var => array of variables */
    lessEngine.setVariables = function ($scope, vars) {
    	for (var i = 0; i < $scope.variables.length; i++ ) {
    		for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
                $scope.variables[i].data[j].value = vars[$scope.variables[i].data[j].key];
            }
    	}
        return $scope;
    };
    
    lessEngine.getKeys = function ($scope) {
    
    	var keys = [
            'escape(@string)',
            'percentage(@number)',
            'rgb(@r, @g, @b)',
            'rgba(@r, @g, @b, @a)',
            'hsl(@hue, @saturation, @lightness)',
            'hsla(@hue, @saturation, @lightness, @alpha)',
            'hsv(@hue, @saturation, @value)',
            'hsva(@hue, @saturation, @value, @alpha)',
            'saturate(@color, 10%)',
            'desaturate(@color, 10%)',            
            'lighten(@color, 10%)',
            'darken(@color, 10%)',
            'fadein(@color, 10%)',
            'fadeout(@color, 10%)',
            'fade(@color, 50%)',
            'spin(@color, 10)',
            'mix(@color1, @color2, [@weight: 50%])',
            'greyscale(@color)',
            'contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%])',
            'multiply(@color1, @color2)',
            'screen(@color1, @color2)',            
            'overlay(@color1, @color2)',
            'softlight(@color1, @color2)',
            'hardlight(@color1, @color2)',
            'difference(@color1, @color2)',
            'exclusion(@color1, @color2)',
            'average(@color1, @color2)',
<<<<<<< HEAD
            'negation(@color1, @color2)',    	
=======
            'negation(@color1, @color2)',
            'ceil(@number)',                
            'floor(@number)',               
            'percentage(@number)',

>>>>>>> master
    	];
    	
        for (var i = 0; i < $scope.variables.length; i++ ) {
            for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
                keys.push($scope.variables[i].data[j].key);
            }
        }
<<<<<<< HEAD
=======
    
>>>>>>> master
        return keys;
    };
    
    lessEngine.getUrls = function ($scope) {
    	var keys = [
    	    "'../twitter-bootstrap/img/glyphicons-halflings.png'",
            "'../twitter-bootstrap/img/glyphicons-halflings-white.png'",
            "'../twitter-bootstrap/img/ap_icons_black_interface-orientation.png'",
            "'../twitter-bootstrap/img/ap_icons_white_interface-orientation.png'"
    	];
    	return keys;
    };
    
    lessEngine.getFonts = function ($scope) {
    	var keys = [
            "'Helvetica Neue', Helvetica, Arial",
            "Georgia",
            "'Courrier New', Consolas",
            "Impact",
            "'Lucida Console', Monaco",
            "'Palatino Linotype','Book Antiqua'",
            "'Trebuchet MS'",
            "Tahoma, Geneva",
            "Verdana, Geneva",
    	    "'Times New Roman', Times"
    	];
<<<<<<< HEAD
=======

        $.ajax({
            url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBb_pLbXGeesG8wE32FMtywG4Vsfq6Uk_8",
            type: 'GET',
            dataType: 'JSONP',
            success: function (data) {   
                for (var i = 0; i < data.items.length; i++ ) {
                    keys.push(data.items[i].family);
                }
            }
        });

>>>>>>> master
    	return keys;
    };
    
    lessEngine.getVariablesToString = function ($scope) {
    	var string = "" +
    	"/*\n"+
<<<<<<< HEAD
    	"* pikock, autreplanete http://www.autreplanete.com/ \n"+
=======
    	"* pikock http://www.pikock.com/ , autreplanete http://www.autreplanete.com/ \n"+
>>>>>>> master
    	"*  \n"+
    	"**/\n";
        for (var i = 0; i < $scope.variables.length; i++ ) {
            string += '\n\n// ' + $scope.variables[i].name + "\n"
            for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
                string += $scope.variables[i].data[j].key+': '+$scope.variables[i].data[j].value+";\n";
            }
        }
        return string;
    };
    
    lessEngine.saveLessVar = function(data){
<<<<<<< HEAD
        var $form = $('<form>').attr('method', 'POST').attr('action', 'http://bootstrapmagic.pikock.com/').append(
=======
        var $form = $('<form>').attr('method', 'POST').attr('action', 'http://bootstrapmagic-pikock.dotcloud.com/').append(
>>>>>>> master
                $('<input>')
                    .attr('type', 'hidden')
                    .attr('name', 'data')
                    .attr('value', data)
            ).
            append(
                $('<input>')
                    .attr('type', 'hidden')
                    .attr('name', 'type')
                    .attr('value', 'less')
            );
        $('body').append($form);
        $form.submit();
    };
    
    lessEngine.saveCSS = function($scope){
    	var parser = new(less.Parser)({
            paths: ['../twitter-bootstrap/less/'], // Specify search paths for @import directives
            filename: 'bootstrap.less' // Specify a filename, for better error messages
        });
        $(document).load($('#twitterBootstrapLess').attr('href'), function (data) {
        	var vars = lessEngine.getVariables($scope);
            for (name in vars) {
                data += ((name.slice(0,1) === '@')? '' : '@') + name +': '+ 
                        ((vars[name].slice(-1) === ';')? vars[name] : vars[name] +';');
            }
        	parser.parse(data, function (err, tree) {
        	    if (err) { return console.error(err) }
        	    var type = ($scope.minified) ? 'mincss' : 'css';
                var css = tree.toCSS({ compress: $scope.minified });
<<<<<<< HEAD
                var $form = $('<form>').attr('method', 'POST').attr('action', 'http://bootstrapmagic.pikock.com/').
=======
                var $form = $('<form>').attr('method', 'POST').attr('action', 'http://bootstrapmagic-pikock.dotcloud.com/').
>>>>>>> master
                    append(
                        $('<input>')
                            .attr('type', 'hidden')
                            .attr('name', 'data')
                            .attr('value', css)
                    ).
                    append(
                        $('<input>')
                            .attr('type', 'hidden')
                            .attr('name', 'type')
                            .attr('value', type)
                    );
                $('body').append($form);
                $form.submit();
            });
        });
    };
    return lessEngine;
<<<<<<< HEAD
});
=======
}]);
>>>>>>> master
