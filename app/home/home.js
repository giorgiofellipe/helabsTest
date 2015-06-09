'use strict';

angular.module('myApp.home', [])

.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.phases = [1,2,3,4,5];
    $scope.applicants = [
      {
        positionIntended: 'DESIGNER',
        name: 'John Doe',
        email: 'john@doe.com',
        birthday: '20/01/1989',
        gender: 'MALE',
        site: 'http://john.doe',
        linkedin: 'http://linkedin.com/profile/view?id=1726381362',
        github: 'https://github.com/johndoe',
        resume: 'absolute/path/to/resume',
        coverLetter: ' Here goes my resume. I\'m applying to this awesome job just because I\'m awesome too! haha',
        phase: 1,
        phaseDescription: 'Entrevista 1',
        notes: [
          {
            date: Date.parse('2015-04-20 13:22:02-03'),
            message: 'Describe some things that you judge relevants about the aplicant...'
          },
          {
            date: Date.parse('2015-04-20 13:12:02-03'),
            message: 'First thing about the applicant'
          }
        ]
      },
      {
        positionIntended: 'BACKEND_DEVELOPER',
        name: 'Marcos Wernersbach',
        email: 'mwernersbach@gmail.com',
        birthday: '11/12/1988',
        gender: 'MALE',
        site: 'http://mwernersbach.com',
        linkedin: 'http://linkedin.com/profile/view?id=9123692389',
        github: 'https://github.com/mwernersbach',
        resume: 'absolute/path/to/resume',
        coverLetter: '',
        phase: 3,
        phaseDescription: 'Desafio/Teste'
      },
      {
        positionIntended: 'DESIGNER',
        name: 'Jane Doe',
        email: 'jane@doe.com',
        birthday: '02/03/1990',
        gender: 'FEMALE',
        site: 'http://jane.doe',
        linkedin: 'http://linkedin.com/profile/view?id=2636783332',
        github: 'https://github.com/doejane',
        resume: 'absolute/path/to/resume',
        coverLetter: ' I really don\'t know what to say',
        phase: 5,
        phaseDescription: 'Contratação'
      },
      {
        positionIntended: 'DESIGNER',
        name: 'Abbie Roat',
        email: 'aroat@gmail.com',
        birthday: '28/08/1992',
        gender: 'FEMALE',
        site: 'http://abbier.com',
        linkedin: 'http://linkedin.com/profile/view?id=192873198273',
        github: 'https://github.com/aroat',
        resume: 'absolute/path/to/resume',
        coverLetter: ' Here goes my resume. I\'m applying to this awesome job just because I\'m awesome too! haha',
        phase: 4,
        phaseDescription: 'Entrevista Final'
      },
      {
        positionIntended: 'FRONTEND_DEVELOPER',
        name: 'Giorgio Fellipe',
        email: 'giorgiofellipe@gmail.com',
        birthday: '18/02/1994',
        gender: 'MALE',
        site: 'http://giorgiofellipe.com.br',
        linkedin: 'https://www.linkedin.com/profile/view?id=201944416&',
        github: 'https://github.com/giorgiofellipe',
        resume: 'absolute/path/to/resume',
        coverLetter: 'It\'ll be a pleasure to work with so talented team',
        phase: 2,
        phaseDescription: 'Entrevista 2'
      }
    ];
}]);