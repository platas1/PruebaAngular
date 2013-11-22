//Guardo el modulo en una variable
var app = angular.module("app", [])

//El nombre se lo ponemos como la pagina (paginaCtrl)
app.controller('IndexCtrl', function($scope, $http) {
    $scope.minombre = "Antonio";
    //$.scope.nombre=null; // Corrige el problema de mostrar cuando no hay nada NO ES RECOMENDABLE
    
    
    $http.get("http://localhost:8084/BancoWeb/entidadesBancarias.json.jsp").success(function(result) {
        $scope.entidadesBancarias = result;
    })
    
    
    $scope.buscarEntidades=function(){
    $http.get("http://localhost:8084/BancoWeb/entidadesBancarias.json.jsp?nombre="+$scope.nombre).success(function(result){
        $scope.entidadesBancarias=result;
        })
    }
        
    
    $scope.verEntidadBancaria=function(idEntidadBancaria){
// Esta linea me guarda el json en txt LOL !!! window.open("http://localhost:8084/BancoWeb/entidadBancaria.json.jsp?idEntidad="+idEntidadBancaria).success(function(result){
       window.location("http://localhost:8084/Prueba_angular/read.html?idEntidad="+idEntidadBancaria);//.success(function(result){
       //window.location.href="ref"+variable;
         //  $scope.entidadesBancarias=result; 
    //})
    }
    
    
    $scope.borrarEntidadBancaria=function(idEntidadBancaria){
    $http.get("http://localhost:8084/BancoWeb/entidadBancariaDelete.json.jsp?idEntidad="+idEntidadBancaria).success(function(/*result*/){
        //$scope.entidadesBancarias=result;
        })
    }
       
});