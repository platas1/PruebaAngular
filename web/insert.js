//Guardo el modulo en una variable
var app = angular.module("app", [])

//El nombre se lo ponemos como la pagina (paginaCtrl)
app.controller('InsertCtrl', function($scope, $http) {


   $scope.insertarEntidadBancaria=function(){
      $http.get("http://localhost:8084/BancoWeb/entidadBancariaInsert.json.jsp?idEntidad="+scope.entidadBancaria.idEntidad+"&codigoEntidad="+$scope.entidadBancaria.codigoEntidad+"&nombre="+$scope.entidadBancaria.nombre+"&cif="+$scope.entidadBancaria.cif+"&tipoEntidadBancaria="+$scope.entidadBancaria.tipoEntidadBancaria).success(function(result){
       $scope.entidadBancaria=result; 
        })  
   }
   
}); 