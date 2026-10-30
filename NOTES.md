# NOTES.md — Diretrizes Pedagógicas e Diário do Instrutor

## Perfil da Equipe e Objetivos de Aprendizagem
- **Destino Principal:** Submissão e vitória no **AI4Good (Brazil Conference 2027 at Harvard & MIT)** e posterior publicação em periódicos de impacto (*The Lancet Planetary Health*, *EHP*, *NeurIPS Datasets & Benchmarks*).
- **Estilo de Aprendizagem Solicitado:** Dinâmico, pragmático, orientado à ação e verbalização em bancas orais de alta exigência técnica, sem perda de tempo com deduções matemáticas abstratas.
- **Divisão de Trabalho:** Equipe de 2 a 3 membros dividindo eixos temáticos (Epidemiologia/Causalidade, Machine Learning/XAI, Engenharia/Geoespacial).

## Alertas Críticos do LLM Council para Incorporar no Treinamento
1. **Quebra do Hermetismo Acadêmico:** Treinar a equipe para nunca começar o pitch falando de "Ortogonalização de Neyman sobre nuisance functions não-paramétricas". A abertura deve ser humana, impactante e voltada a vidas salvas no SUS.
2. **Materialização da Interface Visual (UI):** O portal de aprendizado e as lições devem focar nos dois produtos tangíveis: o **Simulador Contrafactual** e o **IDV**. Sem front-end funcional no Demo Day (05/12/2026), o projeto perde para concorrentes com código mais simples mas melhor demonstrado.
3. **Gerenciamento do Tempo de Computação:** Para o Demo Day, priorizar modelos leves com inferência subsegundo (GBDT + DoubleML leve em DuckDB/Polars) em vez de arriscar falhas de cluster de GPU com o TabFM v1 ao vivo.
4. **Requisito Formal do Edital:** A inscrição na Fase 1 exige equipes de 2 a 3 cidadãos brasileiros. Garantir que a narrativa de equipe e sinergia esteja consolidada.

## Registro de Metas por Semana
- **Semana 1 (Até 07/11):** Domínio completo do vocabulário causal (Cunningham, Hernán, Chernozhukov) e eliminação dos vícios de linguagem acadêmica.
- **Semana 2 (Até 14/11 - Pré-Entrevista):** Simulação de arguição técnica com base na "Cheat Sheet da Banca" e domínio das críticas aos estudos de Pignati, Panis e Bombardi.
- **Semana 3 a 5 (Aceleração AI4Good):** Construção da interface do Simulador Contrafactual e validação dos dados de demonstração ao vivo para o Demo Day.
