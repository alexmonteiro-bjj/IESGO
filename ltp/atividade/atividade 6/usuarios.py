import os
import hashlib
import re

# Caminho absoluto para garantir que 'usuarios.txt' fique na mesma pasta deste arquivo
DIRETORIO_ATUAL = os.path.dirname(os.path.abspath(__file__))
ARQUIVO_USUARIOS = os.path.join(DIRETORIO_ATUAL, "usuarios.txt")


def validar_email(email: str) -> bool:
    """Desafio Extra: Valida se o formato do e-mail é válido."""
    padrao = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return bool(re.match(padrao, email))


def email_existe(email: str) -> bool:
    """Verifica se o e-mail já está cadastrado em usuarios.txt."""
    try:
        with open(ARQUIVO_USUARIOS, "r", encoding="utf-8") as f:
            for linha in f:
                partes = linha.strip().split(";")
                if len(partes) >= 2:
                    if partes[1].lower() == email.strip().lower():
                        return True
    except FileNotFoundError:
        return False
    return False


def hash_senha(senha: str) -> str:
    """Protege a senha gerando um Salt aleatório de 16 bytes e hash PBKDF2 com SHA-256."""
    salt = os.urandom(16)
    # 100.000 iterações com algoritmo sha256
    hash_bytes = hashlib.pbkdf2_hmac(
        'sha256',
        senha.encode('utf-8'),
        salt,
        100000
    )
    # Retorna o salt e o hash em formato hexadecimal separados por dois-pontos
    return f"{salt.hex()}:{hash_bytes.hex()}"


def cadastrar_usuario(nome: str, email: str, senha: str, confirmacao: str) -> tuple[bool, str]:
    """Valida as regras de negócio e cadastra o usuário no arquivo."""
    nome = nome.strip()
    email = email.strip()

    if not nome:
        return False, "O nome não pode estar em branco."

    # Validação do e-mail
    if not validar_email(email):
        return False, "Formato de e-mail inválido (exemplo correto: usuario@dominio.com)."

    if email_existe(email):
        return False, "Este e-mail já está cadastrado."

    # Validação de senhas
    if not senha:
        return False, "A senha não pode estar em branco."

    if senha != confirmacao:
        return False, "A senha e a confirmação de senha não coincidem."

    # Criptografa a senha com PBKDF2 + Salt
    senha_protegida = hash_senha(senha)

    # Gravação no arquivo com open() em modo append "a"
    with open(ARQUIVO_USUARIOS, "a", encoding="utf-8") as f:
        f.write(f"{nome};{email};{senha_protegida}\n")

    return True, "Usuário cadastrado com sucesso!"


def listar_usuarios() -> list[tuple[str, str]]:
    """Lê os usuários cadastrados e retorna uma lista com (nome, email)."""
    usuarios = []
    try:
        with open(ARQUIVO_USUARIOS, "r", encoding="utf-8") as f:
            for linha in f:
                partes = linha.strip().split(";")
                if len(partes) >= 2:
                    usuarios.append((partes[0], partes[1]))
    except FileNotFoundError:
        pass
    return usuarios