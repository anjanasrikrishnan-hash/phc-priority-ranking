package com.phc.priorityranking.service;

import com.opencsv.exceptions.CsvValidationException;
import com.phc.priorityranking.agent.InfraHealthScoringAgent;
import com.phc.priorityranking.agent.PatientLoadScoringAgent;
import com.phc.priorityranking.agent.StaffingScoringAgent;
import com.phc.priorityranking.model.Phc;
import com.phc.priorityranking.model.RankedPhc;
import org.springframework.stereotype.Service;
import com.phc.priorityranking.PhcNotFoundException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class PriorityRankingService {

    private final CsvDataLoaderService csvDataLoaderService;
    private final InfraHealthScoringAgent infraAgent;
    private final PatientLoadScoringAgent patientAgent;
    private final StaffingScoringAgent staffingAgent;

    public PriorityRankingService(
            CsvDataLoaderService csvDataLoaderService,
            InfraHealthScoringAgent infraAgent,
            PatientLoadScoringAgent patientAgent,
            StaffingScoringAgent staffingAgent) {

        this.csvDataLoaderService = csvDataLoaderService;
        this.infraAgent = infraAgent;
        this.patientAgent = patientAgent;
        this.staffingAgent = staffingAgent;
    }

    public List<String> getWeightedScores()
            throws IOException, CsvValidationException {

        List<Phc> phcs =
                csvDataLoaderService.loadFromClasspath("phcs.csv");

        List<String> result = new ArrayList<>();

        for (Phc phc : phcs) {

            double infra =
                    infraAgent.score(phc);

            double patient =
                    patientAgent.score(phc);

            double staffing =
                    staffingAgent.score(phc);

            double finalScore =
                    infra * 0.35 +
                    patient * 0.35 +
                    staffing * 0.30;

            result.add(String.format(
                    "%s | Infra: %.2f | Patient: %.2f | Staffing: %.2f | Final: %.2f",
                    phc.getName(),
                    infra,
                    patient,
                    staffing,
                    finalScore
            ));
        }

        return result;
    }

    public List<RankedPhc> getRankedPhcs()
            throws IOException, CsvValidationException {

        List<Phc> phcs =
                csvDataLoaderService.loadFromClasspath("phcs.csv");

        List<RankedPhc> rankedPhcs = new ArrayList<>();

        for (Phc phc : phcs) {

            double infra =
                    infraAgent.score(phc);

            double patient =
                    patientAgent.score(phc);

            double staffing =
                    staffingAgent.score(phc);

            double finalScore =
                    infra * 0.35
                    + patient * 0.35
                    + staffing * 0.30;

            RankedPhc rankedPhc = new RankedPhc(
                    0,
                    phc.getId(),
                    phc.getName(),
                    infra,
                    patient,
                    staffing,
                    finalScore
            );
            rankedPhc.setPriorityLevel(
        determinePriorityLevel(finalScore)
);

            rankedPhcs.add(rankedPhc);
        }

        // Highest priority score first
        rankedPhcs.sort(
                Comparator.comparingDouble(
                        RankedPhc::getFinalPriorityScore
                ).reversed()
        );

        // Assign ranks
        for (int i = 0; i < rankedPhcs.size(); i++) {
            rankedPhcs.get(i).setRank(i + 1);
        }

        return rankedPhcs;
    }
    public long countByPriorityLevel(String priorityLevel)
        throws IOException, CsvValidationException {

    List<RankedPhc> rankedPhcs = getRankedPhcs();

    return rankedPhcs.stream()
            .filter(phc ->
                    phc.getPriorityLevel()
                            .equalsIgnoreCase(priorityLevel))
            .count();
}
public int getTotalPhcs()
        throws IOException, CsvValidationException {

    return getRankedPhcs().size();
}

    // Level 6A:
    // Converts the final numerical score into a priority category.
    private String determinePriorityLevel(double finalScore) {

        if (finalScore >= 80) {
            return "CRITICAL";
        } else if (finalScore >= 60) {
            return "HIGH";
        } else if (finalScore >= 40) {
            return "MEDIUM";
        } else {
            return "LOW";
        }
    }public RankedPhc getPhcById(String id)
        throws IOException, CsvValidationException {

    List<RankedPhc> rankedPhcs = getRankedPhcs();

    for (RankedPhc phc : rankedPhcs) {
        if (phc.getId().equalsIgnoreCase(id)) {
            return phc;
        }
    }

    throw new PhcNotFoundException("PHC not found: " + id);
}
public List<RankedPhc> filterByPriority(String priorityLevel)
        throws IOException, CsvValidationException {

    List<RankedPhc> rankedPhcs = getRankedPhcs();

    return rankedPhcs.stream()
            .filter(phc ->
                    phc.getPriorityLevel()
                            .equalsIgnoreCase(priorityLevel))
            .toList();
}
public List<RankedPhc> searchPhcs(String query)
        throws IOException, CsvValidationException {

    List<RankedPhc> rankedPhcs = getRankedPhcs();

    String searchQuery = query.toLowerCase().trim();

    return rankedPhcs.stream()
            .filter(phc ->
                    phc.getId().toLowerCase().contains(searchQuery)
                    ||
                    phc.getName().toLowerCase().contains(searchQuery)
            )
            .toList();
}
public List<RankedPhc> searchAndFilter(
        String query,
        String priority)
        throws IOException, CsvValidationException {

    List<RankedPhc> rankedPhcs = getRankedPhcs();

    String searchQuery = query.toLowerCase().trim();
    String priorityQuery = priority.toUpperCase().trim();

    return rankedPhcs.stream()
            .filter(phc ->
                    phc.getId().toLowerCase().contains(searchQuery)
                    ||
                    phc.getName().toLowerCase().contains(searchQuery)
            )
            .filter(phc ->
                    phc.getPriorityLevel()
                            .equalsIgnoreCase(priorityQuery)
            )
            .toList();
}
}