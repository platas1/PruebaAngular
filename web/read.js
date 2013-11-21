//Guardo el modulo en una variable
var app = angular.module("app", [])

//El nombre se lo ponemos como la pagina (paginaCtrl)
app.controller('ReadCtrl', function($scope, $http) {
    
    
//CREO LA VARIABLE QUE LUEGO MOSTRARÉ
 $scope.queryString = getQueryStringParameters();
 
    
        $scope.verEntidadBancaria=function(idEntidadBancaria){
    $http.get("http://localhost:8084/BancoWeb/entidadBancaria.json.jsp?idEntidad="+idEntidadBancaria).success(function(result){
        $scope.queryString=result; 
//MUESTRO EL RESULTADO DE X VARIABLE QUE SE ENCUENTRE EN EL SCOPE. EN ESTE CASO QUERYSTRING
        })
    }
    
    
    //FUNCION QUE MUESTRA UN SOLO DATO 
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
                parametros[nombre] = valor;
            }
        }
    }
    return parametros;
}
});