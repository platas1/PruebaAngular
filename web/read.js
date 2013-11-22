//Guardo el modulo en una variable
var app = angular.module("app", [])

//El nombre se lo ponemos como la pagina (paginaCtrl)
app.controller('ReadCtrl', function($scope, $http) {


//CREO LAS VARIABLE, idEntidadBancaria sera la propiedad idEntidad del objeto parameters
    var parameters= getQueryStringParameters(); // llama funcion
    var idEntidadBancaria=parameters.idEntidad; // coge el campo que queramos del "objeto" creado arriba 
 
    
//FUNCION QUE MUESTRA DATOS
    function getQueryStringParameters() {
        var queryString = window.location.search.substr(1); //El substr(1) es para quitarel "?" del principio;
        var parejaParametros = queryString.split('&');

        var parametros = {};

        if (parejaParametros !== "") {
            for (var i = 0; i < parejaParametros.length; ++i)
            {
                var parejaParametro = parejaParametros[i].split('=');
                if (parejaParametro.length === 2) {
                    var nombre = parejaParametro[0];
                    var valor = decodeURIComponent(parejaParametro[1].replace(/\+/g, " "));
                    parametros[nombre] = valor; // crear propiedad y asigna valor a esa propiedad
                }
            }
        }
        return parametros; //tantas propiedades como parametros tenga la url
    }

//Aqui no hago una funcion porque no hace falta. No lo llamo desde ninguna funcion, se ejecuta después de la función. 
      $http.get("http://localhost:8084/BancoWeb/entidadBancaria.json.jsp?idEntidad="+idEntidadBancaria).success(function(result){
       $scope.queryString=result; 
        })  
//MUESTRO EL RESULTADO DE X VARIABLE QUE SE ENCUENTRE EN EL SCOPE. EN ESTE CASO QUERYSTRING
});