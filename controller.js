var app=angular.module('winrateTarget',[]);
app.controller('winrateController', ['$scope', ($scope) =>{
    $scope.title = 'Float Labs'
    $scope.match = $scope.winrate = $scope.target = 0
    $scope.pernyataan = ""
    $scope.loading = false
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
            menang1 = menang = Math.floor(($scope.match * $scope.winrate) / 100)
            kalah1 = kalah = Math.floor($scope.match - menang)
            wr = (menang*100)/match
            console.log({
                wr: wr,
                menang: menang,
                kalah: kalah
            })
            if($scope.target >= $scope.winrate){                
                while(wr < $scope.target){
                    $scope.loading = true
                    wr = ((menang++) * 100)/(match++)
                    wr = wr.toFixed(2)
                }
                hasil = match-$scope.match
                $scope.pernyataan = "Statistik kamu:<br><ul><li>Menang : "+menang1+"</li><li>Kalah : "+kalah1+"</li></ul><br>Kamu harus menang <b>" + hasil + " kali</b> tanpa kalah untuk mendapatkan winrate " + wr + "%"
            }else{
                $scope.pernyataan = "Target harus lebih besar dari winrate"
            }
            $scope.loading = false
        }
    }
}])
app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });