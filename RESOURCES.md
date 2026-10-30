# Recursos Bibliográficos e Comunidades de Aprendizagem

## Knowledge (Obras Fundamentais & Artigos Seminais)

### Eixo I: Inferência Causal, Econometria Semiparamétrica & Causal AI
- [Book: _Causal Inference: The Mixtape_ por Scott Cunningham (Yale University Press)](https://mixtape.scunning.com/)  
  Texto moderno e intuitivo sobre DAGs, contrafactuais e identificação causal. Use para: Capítulo 3 (DAGs, Backdoor Criterion, Bad Controls e Colisores) e Capítulo 4 (Potential Outcomes e Viés de Seleção).
- [Book: _Causal Inference: What If_ por Miguel A. Hernán & James M. Robins (Harvard T.H. Chan)](https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/)  
  O padrão-ouro mundial da epidemiologia causal. Use para: Capítulos 1 e 2 (Definição de Efeito Causal e Permutabilidade Condicional / _Exchangeability_) e Capítulos 7 e 8 (Confounding vs. Selection Bias no SUS).
- [Book: _Applied Causal Inference Powered by ML and AI_ por Victor Chernozhukov et al. (MIT / Cambridge)](https://causalml-book.org/)  
  A bíblia do Double/Debiased Machine Learning. Use para: Capítulos 0 e 1 (A falácia de interpretar coeficientes de ML) e Capítulos 9 e 10 (Neyman Orthogonality e Cross-Fitting para purgar viés de diagnóstico).
- [Paper: "Double/debiased machine learning for treatment and structural parameters" (The Econometrics Journal, 2018)](https://doi.org/10.1111/ectj.12097)  
  Artigo fundador do DML por Chernozhukov, Hansen et al. Use para: justificar matematicamente por que o estimador mantém distribuição normal assintótica mesmo usando Random Forest ou GBDT para funções nuisance.
- [Library & Docs: DoWhy (Microsoft Research / PyWhy)](https://pywhy-org.github.io/dowhy/)  
  Framework para modelagem causal em 4 etapas (Model, Identify, Estimate, Refute). Use para: refutação com Placebo Treatment, Random Common Cause e Data Subset.

### Eixo II: Epidemiologia Espacial, Pequenas Áreas & Autocorrelação
- [Book: _Applied Spatial Statistics for Public Health Data_ por Lance A. Waller & Carol A. Gotway (Wiley)](https://onlinelibrary.wiley.com/doi/book/10.1002/0471662682)  
  Tratado clássico sobre taxas de morbimortalidade em pequenas áreas. Use para: Capítulo 2 (ASR vs SMR) e Capítulo 3 (Suavização Bayesiana Empírica e fórmula de encolhimento de taxas).
- [Book: _Geographic Data Science with Python_ por Sergio Rey, Dani Arribas-Bel & Levi Wolf (CRC Press)](https://geographicdata.science/book/)  
  Guia oficial do ecossistema PySAL. Use para: Capítulos 4 e 6 (Matrizes de pesos espaciais $k$-nearest neighbors $k=31$ e estatística LISA/Moran's I).
- [Paper: "Cross-validation strategies for data with spatial, temporal, or phylogenetic dependence" (Ecography, 2017)](https://doi.org/10.1111/ecog.02881)  
  Artigo de David R. Roberts et al. que formalizou o Spatial Block Cross-Validation. Use para: blindar a defesa contra vazamento de dados espacial em Ottobacias da ANA.

### Eixo III: Modelos de Fundação Tabulares (TabFM) & Machine Learning Tabular
- [Paper: "Why Do Tree-Based Models Still Outperform Deep Learning on Tabular Data?" por Léo Grinsztajn, Gaël Varoquaux et al. (NeurIPS, 2022)](https://arxiv.org/abs/2207.08815)  
  Demonstra por que GBDTs superam redes neurais clássicas em tabelas. Use para: justificar os baselines de XGBoost, LightGBM e CatBoost no benchmark.
- [Paper: "TabPFN: A Transformer That Solves Small Tabular Problems in a Second" por Noah Hollmann, Frank Hutter et al. (ICLR, 2023 / Nature, 2024)](https://arxiv.org/abs/2207.01848)  
  A revolução das Prior-Data Fitted Networks (PFNs). Use para: explicar a arquitetura do TabFM, Fourier Cell Embeddings e Inferência Bayesiana em Contexto sem backpropagation.
- [Paper: "TabNet: Attentive Interpretable Tabular Learning" por Sercan Arik & Tomas Pfister (AAAI, 2021)](https://arxiv.org/abs/1908.07442)  
  Rede neural profunda com atenção sequencial (Sparsemax). Use para: explicar seleção de atributos esparsa em nível de instância municipal.

### Eixo IV: Interpretabilidade & Explicabilidade em IA (XAI)
- [Book: _Interpretable Machine Learning_ por Christoph Molnar](https://christophm.github.io/interpretable-ml-book/)  
  Manual de referência em XAI agnóstico a modelos. Use para: Seção 5.1/5.2 (PDP e ICE para curvas dose-resposta) e Capítulo 9 (Shapley Values).
- [Paper: "From local explanations to global understanding with explainable AI for trees" por Scott M. Lundberg et al. (Nature Machine Intelligence, 2020)](https://doi.org/10.1038/s42256-019-0138-9)  
  Artigo que estabeleceu o TreeSHAP em tempo polinomial. Use para: explicar por que métricas baseadas em impureza de Gini são inválidas e por que o SHAP tem respaldo axiomático na Teoria dos Jogos.

### Eixo V: Literatura Científica Existente sobre Agrotóxicos e Saúde no Brasil
- [Paper: Pignati et al. (2017) - "Distribuição espacial do uso de agrotóxicos no Brasil" (C&SC)](https://doi.org/10.1590/1413-812320172210.17742017)  
  Metodologia da UFMT de estimativa de ingredientes ativos por lavoura (PAM/IBGE). Use para: contextualizar a base do vetor de exposição agroquímica.
- [Paper: Curvo, Pignati et al. (2013) - "Morbimortalidade por câncer infanto-juvenil e agrotóxicos em MT" (CSP)](https://doi.org/10.1590/S1414-462X2013000100003)  
  Correlação ecológica de leucemias e linfomas em crianças em Mato Grosso.
- [Paper: Panis et al. (2022/2024) - "Widespread pesticide contamination of drinking water and cancer risk in Brazil" (Environment International / STOTEN)](https://doi.org/10.1016/j.envint.2022.107321)  
  Avaliação toxicológica dos 27 agrotóxicos do SISAGUA no Paraná e síntese nacional.
- [Paper: Dutra et al. (2020) - "Uso de agrotóxicos e mortalidade por câncer em regiões de monoculturas" (Saúde em Debate)](https://doi.org/10.1590/0103-1104202012706)  
  Análise de tendências temporais em MT, MS, GO e PR para tumores hormônio-dependentes.
- [Book: Bombardi, L. M. (2017/2023) - _Geografia do Uso de Agrotóxicos no Brasil e Colonialismo Químico_ (FFLCH/USP)](https://arazao.fflch.usp.br/atlas-agrotoxicos)  
  Atlas fundamental sobre subnotificação (1:50 a 1:70 no SINAN) e contaminação hídrica de bacias.
- [Paper: Wu, Dominici et al. (2020) - "Evaluating the impact of long-term exposure to PM2.5 on mortality" (Science Advances)](https://doi.org/10.1126/sciadv.aba5692)  
  Referência de causal machine learning ambiental de Harvard que o `onco-causal` adapta e expande para a realidade brasileira.

---

## Wisdom (Comunidades & Redes Científicas)

- [PyWhy / DoWhy Community (GitHub & Discord)](https://github.com/pywhy-org/dowhy)  
  Comunidade aberta de cientistas de dados causais da Microsoft e Carnegie Mellon. Use para: melhores práticas de DAGs e refutação empírica.
- [PySAL Users & Developers (Geographic Data Science)](https://github.com/pysal/pysal)  
  Fórum dos criadores do PySAL, libpysal e esda. Use para: dúvidas de calibração espacial, matrizes de pesos e Empirical Bayes.
- [Rede Brasileira de Vigilância em Saúde Ambiental (VIGIPEQ / SUS)](https://www.gov.br/saude/pt-br/composicao/svsa/vigilancia-em-saude-ambiental)  
  Comunidade técnica de analistas do Ministério da Saúde que operam o SISAGUA e o SINAN. Use para: validação de usabilidade prática do IDV.
- [Brazil Conference Alumni & Mentors Network](https://www.brazilconference.org/)  
  Rede de líderes de Harvard e MIT para intercâmbio de impacto e validação de protótipos de políticas públicas cívicas.
