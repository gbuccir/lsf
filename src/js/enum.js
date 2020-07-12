function appEnum($rootScope) {
    $rootScope.TipoUsuarioEnum = {
        Projetista: 1,
        Producao: 2,
    };

    $rootScope.StatusProjetoEnum = {
        NaoConcluido: 1,
        Concluido: 2,
    };

};