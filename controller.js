var app=angular.module('winrateTarget',[]);
app.controller('winrateController', ['$scope', ($scope) =>{
    $scope.title = 'Float Labs'
    $scope.match = $scope.winrate = $scope.target = 0
    $scope.pernyataan = ""
    $scope.submit = () => {
        if($scope.match <= 0 ||$scope.winrate <= 0 || $scope.target <= 0 ||
            $scope.match == null || $scope.match == undefined ||
            $scope.winrate == null || $scope.winrate == undefined ||
            $scope.target == null || $scope.target == undefined){
            $scope.pernyataan = "Total match, Winrate, Target Winrate harus lebih dari 0"
        }else{
            let menang = kalah = wr = 0
            target = $scope.target.toFixed(2)
            match = $scope.match.toFixed(2)
            menang = Math.floor(($scope.match * $scope.winrate) / 100)
            kalah = Math.floor($scope.match - menang)
            wr = (menang*100)/match
            if($scope.target >= $scope.winrate){                
                while(wr < $scope.target){
                    wr = ((menang++) * 100)/(match++)
                    wr = wr.toFixed(2)
                    console.log({
                        menang: menang,
                        match: match,
                        wr: wr
                    })
                }
                hasil = match-$scope.match
                $scope.pernyataan = "Kamu harus menang <b>" + hasil + " kali</b> tanpa kalah untuk mendapatkan winrate " + wr + "%"
            }else{
                $scope.pernyataan = "Target harus lebih besar dari winrate"
            }
        }
    }
}])
app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });