print("""

|=============================|

|    Sistema acadêmico        |

|          Python             |

|                             |

|       Cálculo de notas      |

|=============================|

""")



nome = input("Digite o nome do aluno: ")



nota1 = float(input("Digite a nota 01: "))

nota2 = float(input("Digite a nota 02: "))



media = (nota1 + nota2) / 2



print(f"""

|=============================|

|          Resultado          |

|=============================|

| Aluno: {nome:<20} |

|=============================|

| Nota 1: {nota1:<20} | 

| Nota 2: {nota2:<20} | 

|=============================|

| Média: {media:<20} | 

|=============================|

""")