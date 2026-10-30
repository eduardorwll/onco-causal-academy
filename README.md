# 🎓 OncoCausal Academy

> **Base de Aprendizado Técnico, Defesa Oral e Domínio Científico da Equipe**  
> **Projeto Base:** `onco-causal` (Engenharia Preditiva e Inferência Causal na Epidemiologia Oncológica Brasileira)  
> **Objetivo:** Preparação, alinhamento e vitória no **AI4Good (Brazil Conference 2027 at Harvard & MIT)**

---

## 🚀 Como Começar (Acesso Imediato)

Não é necessário instalar nenhuma dependência ou servidor! Todo o portal foi construído em HTML5, CSS Tufte e JavaScript puro para navegação off-line rápida e leve.

Basta abrir o arquivo **`index.html`** no seu navegador favorito:

```bash
# No Linux:
xdg-open index.html

# No macOS:
open index.html

# No Windows:
start index.html
```

---

## 📚 O Que Contém Neste Repositório?

Este repositório foi estruturado utilizando a metodologia da skill [`teach`](https://github.com/mattpocock/skills/tree/main/skills/productivity/teach) para capacitar a equipe a responder com **autoridade, precisão matemática e vocabulário canônico** a qualquer questionamento de bancas de epidemiologia, inteligência artificial e políticas públicas.

### 1. Portal Principal (`index.html`)
* **Simulador Contrafactual Interativo:** Protótipo funcional com controle deslizante de faixa de exclusão de agrotóxicos (300m) em Sorriso-MT, calculando em tempo real vidas salvas e redução percentual de leucemias infantis.
* **Acesso Centralizado:** Hub com links diretos para todas as lições, tratados e materiais de apoio.

---

### 2. Tratados Técnicos Aprofundados (`reference/`)
Guias de alta densidade técnica com deduções matemáticas, fórmulas e citações diretas das fontes:

1. [**Tratado de Inferência Causal & Double ML**](reference/guia-teorico-inferencia-causal.html):
   * Teoria dos desfechos potenciais de Rubin/Neyman.
   * Permutabilidade condicional (*Exchangeability*) de Hernán & Robins (*What If*).
   * Regras de DAGs, backdoor criterion e colisores de Scott Cunningham (*The Mixtape*).
   * Prova da Ortogonalização de Neyman e Cross-Fitting de Victor Chernozhukov (2018).
   * Testes de refutação do DoWhy (placebo treatment e random common cause).
2. [**Tratado de Epidemiologia Espacial & Suavização Bayesiana**](reference/guia-teorico-geoespacial-bayesian.html):
   * Padronização etária direta (ASR OMS) e indireta (SMR).
   * O problema dos pequenos números em cidades < 20k hab. (Waller & Gotway).
   * Dedução matemática do encolhimento (*shrinkage*) do Spatial Linear Empirical Bayes ($k=31$ vizinhos no PySAL).
   * Estatística LISA/Moran e Validação Cruzada Aninhada em Ottobacias da ANA (Roberts et al.).
3. [**Tratado de Tabular Foundation Models (TabFM) vs. GBDTs**](reference/guia-teorico-modelos-tabulares.html):
   * Por que árvores ainda superam Deep Learning clássico em tabelas (Grinsztajn et al., NeurIPS 2022).
   * Prior-Data Fitted Networks (PFNs / TabPFN) de Frank Hutter: inferência bayesiana em contexto em um único *forward pass*.
   * Learned Fourier Cell Embeddings e atenção sequencial do TabNet (Sparsemax).
4. [**Tratado de Toxicologia, Vetores de Exposição e Latência**](reference/guia-teorico-toxicologia-agrotoxicos-cancer.html):
   * Fisiopatologia da carcinogênese (iniciação, promoção e progressão).
   * Bifurcação de lags: $t-2..5$ anos (hematológicos) vs. $t-10..25$ anos (tumores sólidos).
   * Método de lavouras de Pignati, parâmetros do SISAGUA (Portaria 888/2021) e LINACH (Grupo 1 da IARC).
5. [**Tratado de XAI Axiomático, Simulador e IDV**](reference/guia-teorico-xai-e-produtos.html):
   * Os 4 axiomas de Lloyd Shapley (Prêmio Nobel) e a inconsistência do ganho de Gini (Lundberg et al., Nature 2020).
   * Algoritmo TreeSHAP em tempo polinomial $O(TLD^2)$ e limiares dose-resposta ($\text{SHAP}=0$).
   * As formulações matemáticas exatas do Simulador Contrafactual e do Índice de Divergência de Vigilância (IDV).

---

### 3. Currículo de Lições Interativas com Quizzes (`lessons/`)
Seis módulos didáticos sequenciais com testes de retenção ativa e feedback instantâneo:

* **[Lição 0001:](lessons/0001-escopo-e-armadilhas-do-council.html)** Escopo do projeto e as 4 armadilhas apontadas pelo LLM Council (como eliminar o hermetismo e focar no produto cívico).
* **[Lição 0002:](lessons/0002-inferencia-causal-e-double-ml.html)** O paradoxo do viés de detecção assistencial e como o Double ML purga os leitos do SUS.
* **[Lição 0003:](lessons/0003-epidemiologia-espacial-e-bayesian-smoothing.html)** O problema dos pequenos números e a suavização com PySAL.
* **[Lição 0004:](lessons/0004-tabfm-vs-gbdt-prior-data-fitted-networks.html)** O debate tabular: por que mantemos GBDTs e quando o TabFM vence.
* **[Lição 0005:](lessons/0005-estado-da-arte-agrotoxicos-e-cancer.html)** A literatura prévia (Pignati, Panis, Bombardi, Dominici) e o ineditismo científico do projeto.
* **[Lição 0006:](lessons/0006-xai-simulador-contrafactual-e-idv.html)** XAI axiomático e a aplicação prática do Simulador Contrafactual e do IDV.

---

### 4. Materiais de Bolso para o Dia da Apresentação
* [**Cheat Sheet de Defesa Técnica Oral (`reference/cheat-sheet-banca.html`):**](reference/cheat-sheet-banca.html) Tabela com respostas de 30 segundos prontas para as perguntas mais provocativas de bancas examinadoras.
* [**Matriz Comparativa do Estado da Arte (`reference/comparativo-metodologico.html`):**](reference/comparativo-metodologico.html) Tabela com links e DOIs comprovando por que o nosso projeto é inédito globalmente.
* [**Glossário Canônico (`GLOSSARY.md`):**](GLOSSARY.md) Dicionário com termos obrigatórios e termos proibidos/a evitar durante a fala oral.

---

## 👥 Sugestão de Divisão de Estudos no Grupo

Para cobrir todo o material dinamicamente em 1 semana:

| Integrante | Foco Temático | O Que Deve Ler Prioritariamente |
| :--- | :--- | :--- |
| **Integrante 1 (Saúde & Causalidade)** | Epidemiologia e Identificação Causal | Lições 0001, 0002 e 0005 + Tratado de Causalidade + Cheat Sheet |
| **Integrante 2 (Modelagem & IA)** | Machine Learning Tabular e XAI | Lições 0004 e 0006 + Tratados de TabFM e XAI + Cheat Sheet |
| **Integrante 3 (Geoespacial & Dados)** | Pequenas Áreas e Engenharia de Dados | Lições 0001 e 0003 + Tratado de Bioestatística Espacial + Cheat Sheet |

---

## 🛠️ Como Compartilhar no GitHub

Para subir este repositório para a sua conta do GitHub e compartilhar com os colegas:

```bash
# 1. Crie um repositório vazio no GitHub chamado "onco-causal-academy"
# 2. No terminal local:
cd ~/Projects/onco-causal-academy
git remote add origin git@github.com:<seu-usuario>/onco-causal-academy.git
git push -u origin main
```
