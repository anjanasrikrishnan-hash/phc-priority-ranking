# PHC Priority Ranking System

AI-driven system that ranks Primary Health Centres (PHCs) by urgency using
three specialist agents:

- **InfraHealthAgent** — building condition, electricity, water, equipment
- **PatientLoadAgent** — patient demand vs. bed capacity, remoteness
- **StaffingAgent** — doctor/nurse shortages

Each agent scores 0–100. The `PriorityRankingService` combines them
(35% infra, 35% patient load, 30% staffing) into a final ranked list.

## 1. Install Maven (one-time setup)

You don't have Maven installed yet — do this first.

**Windows:**
1. Download Maven from https://maven.apache.org/download.cgi (Binary zip archive)
2. Extract to `C:\Program Files\Apache\maven`
3. Add `C:\Program Files\Apache\maven\bin` to your System PATH
4. Open a new terminal, check: `mvn -version`

**Mac (using Homebrew):**
```
brew install maven
mvn -version
```

**Or — skip installing Maven entirely** and just open this folder in
IntelliJ IDEA or VS Code with the "Extension Pack for Java" — both can
run Spring Boot projects directly without Maven on your PATH, since
they bundle their own.

## 2. Run the project

```
mvn spring-boot:run
```

Then open: http://localhost:8080/api/phc/ranking

You should see a JSON array of 6 sample PHCs, ranked most-urgent first.

Health check: http://localhost:8080/api/health

## 3. Project structure

```
src/main/java/com/phc/priorityranking/
├── PriorityRankingApplication.java   (main entry point)
├── agent/
│   ├── Agent.java                    (common interface)
│   ├── InfraHealthAgent.java
│   ├── PatientLoadAgent.java
│   └── StaffingAgent.java
├── model/
│   └── PHC.java                      (data model)
├── service/
│   ├── CsvDataLoaderService.java     (reads phc_data.csv)
│   └── PriorityRankingService.java   (orchestrates agents, ranks)
└── controller/
    └── PriorityRankingController.java (REST API)

src/main/resources/
├── application.properties
└── phc_data.csv                      (sample data — 6 PHCs)
```

## 4. Next steps for the team

- **Data/documentation teammate:** replace `phc_data.csv` with real or
  more realistic data; document the scoring logic for the report.
- **Frontend teammate:** call `GET /api/phc/ranking`, render the ranked
  list (a simple table/bar chart works great as a demo).
- **You (backend):** tune the weight constants in
  `PriorityRankingService`, add validation, maybe add a
  `POST /api/phc/upload` endpoint to accept a custom CSV later.

## Notes

- Agents are plain Spring `@Component` beans implementing a shared
  `Agent` interface — easy to explain in your report as a
  "multi-agent" design even though it's simple weighted scoring under
  the hood.
- CORS is wide open (`@CrossOrigin(origins = "*")`) for easy local dev
  with the HTML/JS frontend — tighten this before any real deployment.
