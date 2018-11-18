(function(global, $){
    var greet = function(firstname, lastname, language){
        return new greet.init(firstname,lastname,language);

    }  
    greet.prototype={
        normalgreeting : {
            telugu :"namaste",
            kannada : "namskara",
            tamil : "Vanakam"

        },
        informalgreeting : {
            telugu :"namaste ra",
            kannada : "namskara kano",
            tamil : "Vanakam da"

        },

        greetings : function(formal){{
            if(formal){

            }
            
        },

        setLang: function(lang){

        }


        }
        

    }

    greet.init = function(firstname, lastname,language){
        var self = this;
        self.firstname=firstname || '';
        self.lastname=lastname || '';
        self.language=language || 'kannada  ';     

    }
    greet.init.prototype= greet.prototype;
    global.greet= global.G$=greet;


}(window,jQuery));