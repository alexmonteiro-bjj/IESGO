from getpass import getpass
import usuarios

def exibir_menu():
    print("\n" + "=" * 40)
    print("      SISTEMA DE GESTÃO DE USUÁRIOS")
    print("=" * 40)
    print("1 - Cadastrar novo usuário")
    print("2 - Listar usuários cadastrados")
    print("0 - Sair")
    print("=" * 40)

def main():
    while True:
        exibir_menu()
        opcao = input("Escolha uma opção: ").strip()

        if opcao == "0":
            print("\nFinalizando o sistema... Até logo!")
            break

        elif opcao == "1":
            print("\n--- CADASTRO DE USUÁRIO ---")
            nome = input("Nome completo: ")
            email = input("E-mail: ")
            
            # getpass() oculta os caracteres digitados no terminal
            senha = getpass("Senha: ")
            confirmacao = getpass("Confirme a senha: ")

            sucesso, mensagem = usuarios.cadastrar_usuario(nome, email, senha, confirmacao)
            
            if sucesso:
                print(f"\n[SUCESSO] {mensagem}")
            else:
                print(f"\n[ERRO] {mensagem}")

        elif opcao == "2":
            print("\n--- USUÁRIOS CADASTRADOS ---")
            lista = usuarios.listar_usuarios()
            if not lista:
                print("Nenhum usuário cadastrado até o momento.")
            else:
                for idx, (nome, email) in enumerate(lista, start=1):
                    print(f"{idx}. Nome: {nome:<20} | E-mail: {email}")

        else:
            print("\n[ERRO] Opção inválida! Escolha 1, 2 ou 0.")

if __name__ == "__main__":
    main()