print("=" * 35)
print(" CONTROLE DE VELOCIDADE")
print("=" * 35)

normais = 0
acima_limite = 0
infracoes_graves = 0

for i in range(5):

    print(f"\nVeículo {i + 1}")

    placa = input("Digite a placa: ").upper()

    velocidade = float(
        input("Digite a velocidade registrada: ")
    )

    if velocidade <= 80:
        situacao = "DENTRO DO LIMITE"
        normais += 1

    elif velocidade <= 100:
        situacao = "ACIMA DO LIMITE"
        acima_limite += 1

    else:
        situacao = "INFRAÇÃO GRAVE"
        infracoes_graves += 1

    print(f"{placa} | {velocidade:.0f} km/h | {situacao}")

    print("-" * 35)


print("\n" + "=" * 35)
print("       RESUMO GERAL")
print("=" * 35)

print(f"Veículos dentro do limite: {normais}")
print(f"Veículos acima do limite: {acima_limite}")
print(f"Infrações graves: {infracoes_graves}")

print("=" * 35)