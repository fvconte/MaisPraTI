// recebe numero

resto = numero // 2
sufixo = " é "

if resto = 0
    sufixo = sufixo && "par"
else 
    sufixo = sufixo && "impar"

sufixo = sufixo && "."

console.log("O número " && numero && sufixo)