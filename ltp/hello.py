("ola, mundo!")


# ==============================
# ATIVIDADE 1
# ==============================

nome = input("Qual é o seu nome? ")

print(f"Olá, {nome}! Seja bem-vindo(a) ao Python.")


# ==============================
# ATIVIDADE 2
# ==============================

nome = input("Qual é o seu nome? ")

idade = int(input("Qual é a sua idade? "))

cidade = input("Qual é a sua cidade? ")

print("nome", nome)

print("idade", idade)

print("cidade", cidade)


# ==============================
# ATIVIDADE 3
# ==============================

nomep = input("Qual é o produto? ")

preço = float(input("valor do produto"))

print(f"O {nomep} custa {preço}")


# ==============================
# ATIVIDADE 4
# ==============================

nome = input("digite o nome do aluno:")

matricula = int(input("digite a matricula do aluno:"))

curso = input("digite o curso do aluno:")

print(f"aluno {nome} \n matricula {matricula} \n curso {curso}")


# ==============================
# ATIVIDADE 5
# ==============================

nome = input("digite o nome do filme:")

ano = int(input("digite o ano de lançamento: "))

diretor = input("digite o diretor:")

genero = input("digite o genero:")

print(f"========FILME======== \n titulo{nome} \n ano:{ano} \n diretor:{diretor} \n genero {genero}")


# ==============================
# ATIVIDADE 6
# ==============================

numero1 = int(input("digite o primeiro numero :"))

numero2 = int(input("digite o segundo numero :"))

soma = numero1 + numero2

print(f"o resultado da soma é : {soma}")


# ==============================
# ATIVIDADE 7
# ==============================

nome = input("digite seu nome:")

nasc = int(input("digite o ano de seu nascimento:"))

atual = int(input("digite o ano atual:"))

idade = atual - nasc

print(f"{nome}, você tem aproximadamente {idade} anos")


# ==============================
# ATIVIDADE 8
# ==============================

nomep = input("nome do produto:")

preço = float(input("valor da unidade do produto :"))

quantidade = int(input("quantidade comprada :"))

valor_total = preço * quantidade

print(f"produto :{nomep} \n preço :{preço} \n valor total :{valor_total}")


# ==============================
# ATIVIDADE 9
# ==============================

nomeA = input("digite o nome do aluno:")

nota1 = float(input("digite a primeira nota :"))

nota2 = float(input("digite a segunda nota :"))

nota3 = float(input("digite a terceira nota:"))

media = (nota1 + nota2 + nota3) / 3

print(f"aluno:{nomeA} \n media:{media}")


# ==============================
# ATIVIDADE 10
# ==============================

nome = input("digite seu nome:")

idade = int(input("digite sua idade:"))

cidade = input("digite sua cidade:")

profissão = input("digite sua profissão:")

salario = float(input("digite seu salario:"))

curso = input("digite seu curso:")

print(f"========CADASTRO DO USUARIO======== \n nome :{nome} \n idade: {idade} \n cidade: {cidade} \n profissão: {profissão} \n salario: {salario} \n curso: {curso} \n ======== CADASTRO REALIZADO COM SUCESSO ! ========")

