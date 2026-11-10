import os
import hashlib
import hmac
import re
from datetime import datetime

# Diretórios e caminhos dos arquivos
DIRETORIO_ATUAL = os.path.dirname(os.path.abspath(__file__))
ARQUIVO_USUARIOS = os.path.join(DIRETORIO_ATUAL, "usuarios.txt")
ARQUIVO_LOG = os.path.join(DIRETORIO_ATUAL, "acessos.log")


def validar_email(email: str) -> bool:
    """Valida o formato do e-mail com expressão regular."""
    padrao = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return bool(re.match(padrao, email))


def email_existe(email: str) -> bool:
    """Verifica se o e-mail já existe na base."""
    try:
        with open(ARQUIVO_USUARIOS, "r", encoding="utf-8") as f:
            for linha in f:
                partes = linha.strip().split(";")
                if len(partes) >= 2 and partes[1].lower() == email.strip().lower():
                    return True
    except FileNotFoundError:
        return False
    return False


def hash_senha(senha: str) -> str:
    """Gera salt aleatório e calcula PBKDF2 com SHA-256."""
    salt = os.urandom(16)
    hash_bytes = hashlib.pbkdf2_hmac('sha256', senha.encode('utf-8'), salt, 100000)
    return f"{salt.hex()}:{hash_bytes.hex()}"


def verificar_senha(senha_fornecida: str, senha_armazenada: str) -> bool:
    """Recalcula o PBKDF2 com o salt salvo e compara com o hash registrado."""
    try:
        salt_hex, hash_hex_esperado = senha_armazenada.split(":")
        salt = bytes.fromhex(salt_hex)
        
        # Recalcula o hash com a mesma quantidade de iterações e o mesmo salt
        hash_calculado = hashlib.pbkdf2_hmac(
            'sha256',
            senha_fornecida.encode('utf-8'),
            salt,
            100000
        ).hex()

        # hmac.compare_digest evita ataques de tempo (timing attacks)
        return hmac.compare_digest(hash_calculado, hash_hex_esperado)
    except (ValueError, TypeError):
        return False


def registrar_log_acesso(email: str) -> None:
    """Desafio Extra: Grava data, hora e e-mail da autenticação bem-sucedida."""
    agora = datetime.now().strftime("%d/%m/%Y às %H:%M:%S")
    with open(ARQUIVO_LOG, "a", encoding="utf-8") as f:
        f.write(f"[{agora}] Login bem-sucedido do usuário: {email}\n")


def cadastrar_usuario(nome: str, email: str, senha: str, confirmacao: str) -> tuple[bool, str]:
    """Valida os dados e salva o usuário no arquivo."""
    nome = nome.strip()
    email = email.strip()

    if not nome:
        return False, "O nome não pode estar em branco."

    if not validar_email(email):
        return False, "Formato de e-mail inválido."

    if email_existe(email):
        return False, "Este e-mail já está em uso."

    if not senha:
        return False, "A senha não pode estar em branco."

    if senha != confirmacao:
        return False, "A senha e a confirmação não coincidem."

    senha_criptografada = hash_senha(senha)

    with open(ARQUIVO_USUARIOS, "a", encoding="utf-8") as f:
        f.write(f"{nome};{email};{senha_criptografada}\n")

    return True, "Usuário cadastrado com sucesso!"


def fazer_login(email: str, senha: str) -> dict | None:
    """Confere as credenciais no arquivo. Retorna dados do usuário se válido, ou None."""
    email = email.strip().lower()
    try:
        with open(ARQUIVO_USUARIOS, "r", encoding="utf-8") as f:
            for linha in f:
                partes = linha.strip().split(";")
                if len(partes) == 3:
                    nome_reg, email_reg, senha_reg = partes
                    if email_reg.lower() == email:
                        # Confere a senha recalculando o PBKDF2
                        if verificar_senha(senha, senha_reg):
                            # Registra no log de acessos (Desafio Extra)
                            registrar_log_acesso(email_reg)
                            return {"nome": nome_reg, "email": email_reg}
                        break
    except FileNotFoundError:
        return None

    return None