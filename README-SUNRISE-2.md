# Sunrise 2.0 — V1

Aplicación dedicada para gestionar los pozos americanos de Sunrise Pádel.

## Reglas V1

- Pozo: 15 €.
- Bonos: 7/100 €, 10/140 €, 15/200 €.
- Los bonos son participaciones independientes y no caducan.
- Un bono consumido no genera un nuevo ingreso.
- Pozo gratis: derecho independiente que se consume al usarlo.
- 4 jugadores por pista.
- Pistas automáticas según asistentes confirmados.
- Orden configurable por defecto: 12 → 9 → 6 → 3 → 2 → 5 → 8 → 11 → 10 → 7 → 4 → 1.
- Generación intentando mezclar género y respetar una variación de nivel de ±0,4.
- Cambios manuales permitidos con aviso si incumplen reglas.
- Puntos automáticos según número de pistas y orden configurado; ganador +1.
- Ranking trimestral: mejores 8 resultados.
- Desempates: victorias de pozo y participaciones.
- El nivel Sunrise se actualiza al cerrar la jornada usando pista inicial, pista del último partido y resultado final.

## Próximo paso

Implementar el modelo de datos y sustituir progresivamente la lógica del prototipo anterior por el flujo Sunrise 2.0.
