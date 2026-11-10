from getpass import getpass
import usuarios


def area_restrita(usuario: dict):
    """Menu restrito acessível apenas para usuários autenticados."""
    while True:
        print("\n" + "=" * 40)
        print(f"   ÁREA RESTRITA - Bem-vindo(a), {usuario['nome']}!")
        print("=" * 40)
        print("1 - Meu perfil")
        print("0 - Logout")
        print("=" * 40)

        opcao = input("Escolha uma opção: ").strip()

        if opcao == "1":
            print("\n--- MEU PERFIL ---")
            print(f"Nome : {usuario['nome']}")
            print(f"E-mail: {usuario['email']}")
        elif opcao == "0":
            print("\nRealizando logout... Sessão encerrada.")
            break
        else:
            print("\n[ERRO] Opção inválida!")


def fluxo_login():
    """Gerencia até 3 tentativas de autenticação."""
    print("\n--- AUTENTICAÇÃO ---")
    tentativas = 0
    max_tentativas = 3

    while tentativas < max_tentativas:
        email = input("E-mail: ")
        senha = getpass("Senha: ")

        usuario = usuarios.fazer_login(email, senha)

        if usuario:
            print("\n[SUCESSO] Login realizado com sucesso!")
            area_restrita(usuario)
            return  # Retorna ao menu inicial após o logout

        tentativas += 1
        restantes = max_tentativas - tentativas

        if restantes > 0:
            print(f"\n[FALHA] Credenciais incorretas! Tentativas restantes: {restantes}\n")
        else:
            print("\n" + "!" * 45)
            print("[ACESSO NEGADO] Limite de 3 tentativas atingido!")
            print("!" * 45)


def main():
    while True:
        print("\n" + "=" * 35)
        print("          SISTEMA PRINCIPAL")
        print("=" * 35)
        print("1 - Cadastrar")
        print("2 - Login")
        print("0 - Sair")
        print("=" * 35)

        opcao = input("Opção: ").strip()

        if opcao == "0":
            print("\nSaindo do sistema. Até logo!")
            break

        elif opcao == "1":
            print("\n--- NOVO CADASTRO ---")
            nome = input("Nome: ")
            email = input("E-mail: ")
            senha = getpass("Senha: ")
            confirmacao = getpass("Confirme a senha: ")

            sucesso, msg = usuarios.cadastrar_usuario(nome, email, senha, confirmacao)
            if sucesso:
                print(f"\n[SUCESSO] {msg}")
            else:
                print(f"\n[ERRO] {msg}")

        elif opcao == "2":
            fluxo_login()

        else:
            print("\n[ERRO] Opção inválida! Escolha 1, 2 ou 0.")


if __name__ == "__main__":
    main()