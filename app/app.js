'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.awesomelist',
  'pascalprecht.translate'
])
.config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
    $routeProvider.when('/home', {
      templateUrl: '/home/home.html',
      controller: 'HomeCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
    $translateProvider.translations('en_US', {
      PHASE_SELECT: '- Choose a Phase -',
      ABOUT: 'About',
      NOTES: 'Notes',
      ADD: 'Add',
      DETAILS: 'Details',
      PHASE1: 'Interview 1',
      PHASE2: 'Interview 2',
      PHASE3: 'Test',
      PHASE4: 'Final Interview',
      PHASE5: 'Hiring',
      NAME: 'Name',
      POSITION_INTENDED: 'Position Intended',
      BIRTHDAY: 'Birthday',
      GENDER: 'Gender',
      ADDRESS: 'Address',
      PHONE_NUMBER: 'Phone Number',
      RESUME: 'Resume',
      COVER_LETTER: 'Cover Letter',
      MALE: 'Male',
      FEMALE: 'Female',
      FRONTEND_DEVELOPER: 'Front-end Developer',
      BACKEND_DEVELOPER: 'Back-end Developer',
      DESIGNER: 'Designer'
    });
    $translateProvider.translations('pt_BR', {
      PHASE_SELECT: '- Selecione uma Etapa -',
      ABOUT: 'Sobre',
      NOTES: 'Observações',
      ADD: 'Adicionar',
      DETAILS: '- Detalhes',
      PHASE1: 'Entrevista 1',
      PHASE2: 'Entrevista 2',
      PHASE3: 'Desafio/Teste',
      PHASE4: 'Entrevista Final',
      PHASE5: 'Contratação',
      NAME: 'Nome',
      POSITION_INTENDED: 'Vaga Pretendida',
      BIRTHDAY: 'Data de Nascimento',
      GENDER: 'Sexo',
      ADDRESS: 'Endereço',
      PHONE_NUMBER: 'Telefone',
      RESUME: 'Currículo',
      COVER_LETTER: 'Carta de Apresentação',
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      FRONTEND_DEVELOPER: 'Desenvolvedor Front-end',
      BACKEND_DEVELOPER: 'Desenvolvedor Back-end',
      DESIGNER: 'Designer'
    });
    $translateProvider.preferredLanguage('pt_BR');
}]);
