/*
    Operadores Lógicos (Logical Operators)
        Usados tipicamente com valores booleanos (Lógicos) -> Retornam um valor boolenao.
            Entretanto, os operadores && e || na verdade retornam o valor de um dos operandos especificados, de forma que se esses operadores forem utilizados com valores não-booleanos, eles possam retornar um valor não booleano.

    && -> E -> Exigente e Obediente = 
        Retorna verdadeiro caso ambos os operandos sejam VERDADEIROS; caso contrário, retorna FALSO.

        true && true = true
        true && false = false
        false && false = false

    || -> Ou -> Tanto faz =
        Retorna verdadeiro caso algum (pelo menos um) dos operandos seja VERDADEIRO; caso todos operando sejam FALSO, retorna FALSO.
        
        true || true = true
        true || false = true
        false || false = false

    ! -> Negação = Inverte tudo
        !true = false
        !false = true

*/