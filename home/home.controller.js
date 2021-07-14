class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = 'AngularJS';

    $scope.candidates = [
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female'
      },
      {
        id: 2,
        first_name: 'Giavani',
        last_name: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male'
      },
      {
        id: 3,
        first_name: 'Noell',
        last_name: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female'
      },
      {
        id: 4,
        first_name: 'Willard',
        last_name: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male'
      }
    ];

    $scope.search = function(candidate) {
      if ($scope.searchText == undefined) {
        return true;
      } else {
        if (
          candidate.first_name
            .toLowerCase()
            .indexOf($scope.searchText.toLowerCase()) != -1 ||
          candidate.last_name
            .toLowerCase()
            .indexOf($scope.searchText.toLowerCase()) != -1 ||
          candidate.email
            .toLowerCase()
            .indexOf($scope.searchText.toLowerCase()) != -1
        ) {
          return true;
        }
      }
      return false;
    };

    $scope.genderSearch = function(item) {
      if (
        ($scope.mgender == undefined && $scope.fgender == undefined) ||
        ($scope.mgender != undefined && $scope.fgender != undefined)
      ) {
        return true;
      } else {
        //need to implement the logic here
        return true;
      }
      return false;
    };
    // $scope.gender = ['Male', 'Female'];
  }
}

export default HomeCtrl;
