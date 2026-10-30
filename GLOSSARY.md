# onco-causal Glossary

Vocabulário canônico e terminologia técnica obrigatória do ecossistema `onco-causal`, abrangendo inferência causal, epidemiologia espacial, modelos tabulares fundacionais e engenharia de dados.

## Termos

### Inferência Causal & Econometria

**Neyman Orthogonality**:  
Condição matemática em que a derivada do momento causal em relação aos erros de estimação das funções auxiliares (*nuisance*) é nula.  
*Evite*: Independência linear simples, ortogonalização de Gram-Schmidt.

**Double / Debiased Machine Learning (DML)**:  
Abordagem semiparamétrica que utiliza algoritmos de Machine Learning de alta dimensão com validação cruzada cruzada (*cross-fitting*) para purgar o viés de regularização e estimar o Efeito Médio do Tratamento com consistência $\sqrt{n}$ e distribuição assintoticamente normal.  
*Evite*: Regressão de machine learning comum, modelo de dois estágios ingênuo.

**Viés de Detecção Assistencial**:  
Distorção empírica na qual municípios com maior concentração de leitos oncológicos, tomógrafos e unidades CACON/UNACON apresentam taxas registradas de câncer artificialmente maiores devido ao acesso ao diagnóstico, e não por maior risco biológico real.  
*Evite*: Subnotificação simples, erro de diagnóstico.

**Exchangeability (Permutabilidade Condicional)**:  
Axioma de causalidade segundo o qual, condicional a um vetor suficiente de variáveis de confusão $Z$, a distribuição dos desfechos potenciais $Y^a$ é independente do nível de tratamento real recebido $A$.  
*Evite*: Aleatorização perfeita, homogeneidade.

**Backdoor Criterion (Critério da Porta dos Fundos)**:  
Critério gráfico em um DAG causal que define se um conjunto de variáveis $Z$ bloqueia todos os caminhos espúrios entre a exposição e o desfecho sem conter descendentes do tratamento ou colisores.  
*Evite*: Controle arbitrário de covariáveis.

**Colisor (Collider)**:  
Variável em um grafo causal que é efeito comum de duas ou mais variáveis ($A \to C \leftarrow B$); controlar por um colisor abre um caminho espúrio e introduz viés de seleção.  
*Evite*: Confundidor intermediário, variável mediadora.

---

### Epidemiologia Espacial & Bioestatística

**Spatial Linear Empirical Bayes**:  
Estimador de suavização de taxas para pequenas áreas que calcula uma média ponderada entre a taxa observada local e a média da vizinhança espacial ($k=31$), encolhendo a estimativa em direção ao prior com peso inversamente proporcional ao tamanho populacional.  
*Evite*: Suavização por média móvel, filtro gaussiano simples.

**Taxa Padronizada por Idade (ASR / Padronização Direta)**:  
Taxa ajustada pela população padrão mundial da OMS para eliminar as distorções provocadas pelas diferenças na estrutura etária entre diferentes municípios.  
*Evite*: Taxa bruta de mortalidade, coeficiente de mortalidade simples.

**Spatial Data Leakage (Vazamento de Dados Espacial)**:  
Erro metodológico crítico em que amostras de treino e teste são sorteadas aleatoriamente no espaço, permitindo que o modelo memorize a autocorrelação territorial de vizinhos imediatos em vez de aprender relações causais generalizáveis.  
*Evite*: Overfitting espacial, viés de amostragem.

**Nested Spatial Block Cross-Validation (SBCV)**:  
Esquema de validação cruzada aninhada onde os dobras (*folds*) são agrupados por blocos geográficos disjuntos (Ottobacias hidrográficas da ANA), impedindo a contaminação entre conjuntos de suporte e conjuntos de consulta.  
*Evite*: K-Fold padrão do scikit-learn, split temporal simples.

---

### Modelos de Fundação Tabulares & Machine Learning

**Prior-Data Fitted Networks (PFNs)**:  
Classe de redes neurais do tipo Transformer pré-treinadas offline em milhões de conjuntos de dados sintéticos gerados por Modelos Causais Estruturais, capazes de aproximar a Inferência Bayesiana completa em dados tabulares.  
*Evite*: LLMs adaptados para texto, modelos tabulares com backpropagation local.

**In-Context Learning Tabular (Aprendizagem em Contexto)**:  
Capacidade do modelo de receber pares de dados tabulares (features e alvo) diretamente como tokens de contexto e realizar predições para novas instâncias em uma única passagem direta (*single forward pass*), sem atualizar pesos via gradiente descendente.  
*Evite*: Fine-tuning, treino tradicional supervisionado.

**Fourier Cell Embeddings**:  
Mecanismo de codificação contínua que projeta valores numéricos tabulares em combinações harmônicas de frequências senoidais e cossenoidais parametrizadas, superando o problema de descontinuidade numérica em Transformers.  
*Evite*: One-hot encoding, normalização min-max padrão.

---

### Explicabilidade & Produtos de Impacto

**TreeSHAP**:  
Algoritmo de cálculo exato de valores de Shapley em tempo polinomial para modelos baseados em árvores, garantindo aditividade local e consistência teórica fundamentada na Teoria dos Jogos.  
*Evite*: Feature importance de impureza de Gini, permutation importance ingênua.

**Simulador Contrafactual de Vidas Salvas**:  
Ferramenta computacional orientada a gestores públicos que aplica derivadas causais e cenários regulatórios contrafactuais (ex.: zonas de amortecimento de 300m de agrotóxicos ou cumprimento da Portaria GM/MS nº 888/2021) para projetar óbitos oncológicos evitados por década em nível municipal.  
*Evite*: Calculadora de risco genérica, painel de estatística descritiva.

**Índice de Divergência de Vigilância (IDV)**:  
Métrica quantitativa de auditoria algorítmica calculada pela razão entre o adoecimento esperado com base na assinatura físico-química e ocupacional do município e a taxa oficialmente notificada no SINAN, identificando *Silent Hotspots* para fiscalização do Ministério Público e CEREST.  
*Evite*: Taxa de subnotificação estimada, índice de omissão simples.
