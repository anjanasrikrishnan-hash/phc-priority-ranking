package com.phc.priorityranking.service;

import com.phc.priorityranking.agent.InfraHealthAgent;
import com.phc.priorityranking.agent.PatientLoadAgent;
import com.phc.priorityranking.agent.StaffingAgent;
import com.phc.priorityranking.model.PHC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

/**
 * Orchestrates the three specialist agents and combines their
 * sub-scores into one final priority score per PHC, then ranks them.
 *
 * Weighting (tune these later based on your project's requirements):
 *  - Infra:        35%
 *  - Patient Load: 35%
 *  - Staffing:     30%
 */
@Service
public class PriorityRankingService {

    private static final double INFRA_WEIGHT = 0.35;
    private static final double PATIENT_LOAD_WEIGHT = 0.35;
    private static final double STAFFING_WEIGHT = 0.30;

    private final InfraHealthAgent infraHealthAgent;
    private final PatientLoadAgent patientLoadAgent;
    private final StaffingAgent staffingAgent;

    @Autowired
    public PriorityRankingService(InfraHealthAgent infraHealthAgent,
                                   PatientLoadAgent patientLoadAgent,
                                   StaffingAgent staffingAgent) {
        this.infraHealthAgent = infraHealthAgent;
        this.patientLoadAgent = patientLoadAgent;
        this.staffingAgent = staffingAgent;
    }

    /**
     * Runs all three agents on every PHC, computes the weighted final
     * score, and returns the list sorted most-urgent first.
     */
    public List<PHC> rankPHCs(List<PHC> phcs) {
        for (PHC phc : phcs) {
            double infra = infraHealthAgent.evaluate(phc);
            double load = patientLoadAgent.evaluate(phc);
            double staffing = staffingAgent.evaluate(phc);

            double finalScore = (infra * INFRA_WEIGHT)
                    + (load * PATIENT_LOAD_WEIGHT)
                    + (staffing * STAFFING_WEIGHT);

            phc.setFinalPriorityScore(finalScore);
        }

        phcs.sort(Comparator.comparingDouble(PHC::getFinalPriorityScore).reversed());
        return phcs;
    }
}
